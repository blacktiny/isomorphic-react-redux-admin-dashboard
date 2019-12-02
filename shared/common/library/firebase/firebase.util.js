import { db } from './firebase';
export function convertCollectionsSnapshotToMap(snapshots) {
  return snapshots.docs.reduce((accumulator, collection) => {
    accumulator[collection.id] = collection.data();
    return accumulator;
  }, {});
}
export async function getNewDocRef(collectionName) {
  return await db.collection(collectionName).doc();
}
export async function addDocument(collectionName, documentData) {
  return await db
    .collection(collectionName)
    .add(documentData)
    .then(docRef => docRef.id);
}
export async function setDocument(collectionName, docRef, documentData) {
  return await db
    .collection(collectionName)
    .doc(docRef)
    .set(documentData);
}

export async function getDocuments(collectionName) {
  return await db
    .collection(collectionName)
    .get()
    .then(querySnapshot =>
      querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    );
}
export async function getDocumentsByQuery(collectionName, query) {
  console.log(...query, collectionName, 'test');

  return await db
    .collection(collectionName)
    .where(...query)
    .get()
    .then(querySnapshot =>
      querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    );
}

export async function deleteDocuments(collectionName) {
  const collectionRef = db.collection(collectionName);
  var batch = db.batch();
  await collectionRef
    .get()
    .then(querySnapshot =>
      querySnapshot.docs.map(doc => batch.delete(collectionRef.doc(doc.id)))
    );

  return await batch.commit().then(() => {
    console.log('Batch Deletion successfully committed!');
  });
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = db.collection(collectionKey);
  const batch = db.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit().then(() => {
    console.log('Batch Addition successfully committed!');
  });
};
// const { title, items } = doc.data();
//     return {
//       routeName: encodeURI(title.toLowerCase()),
//       id: doc.id,
//       title,
//       items,
//     };
//   });
//   console.log(transformedCollection);
//   return transformedCollection.reduce((accumulator, collection) => {
//     accumulator[collection.title.toLowerCase()] = collection;
//     return accumulator;
//   }, {});
