let createdAt = new Date().getTime();
const tableData = JSON.parse(
  `[{
  "id": "1",
  "title": "React is the future",
  "description": "Let’s take a closer look at some of the patterns that are emerging in the React ecosystem.",
  "excerpt": "Let’s take a closer look at some of the patterns that are emerging",
  "deleted_at": null,
  "created_at": ${createdAt},
  "status": "publish",
  "key": null,
  "slug": "future-in-react-116140e5fe8f"
}, {
  "id": "2",
  "title": "Global configuration of webpack, react and CRA",
  "description": "We are very happy to introduce. It’s available on npm effective immediately. To upgrade, run:",
  "excerpt": "Introducing the devtools world",
  "deleted_at": null,
  "created_at": ${createdAt},
  "status": "publish",
  "key": null,
  "slug": "next5-react"
}, {
  "id": "3",
  "title": "Reactive Pro: A user guide",
  "description": "Reactive a modern web based filtering and searching plugin. I have already released two apps in production, Kiven Aa (React) and Pollen Chat (React Native). ",
  "excerpt": "I’ve been working with React and React-Native for the last couple of months.",
  "deleted_at": null,
  "created_at": ${createdAt},
  "status": "publish",
  "key": null,
  "slug": "rock-solid-react-js-foundations-a-beginners-guide-c45c93f5a923"
}, {
  "id": "4",
  "title": "Userplace - a compelete user experience.",
  "description": "There, You can use the traditional if statement or the switch statement. In this article, we’ll explore a few alternatives ",
  "excerpt": "I’ve been the last couple of months.",
  "deleted_at": null,
  "created_at": ${createdAt},
  "status": "publish",
  "key": null,
  "slug": "rock-solid-react-js-foundations-a-beginners-guide-c45c93f5a923"
}, {
  "id": "5",
  "title": "React is rulling the tech ",
  "description": "There, You can use the traditional if statement or the switch statement. In this article, we’ll explore a few alternatives ",
  "excerpt": "I’ve been the last couple of months.",
  "deleted_at": null,
  "created_at": ${createdAt},
  "status": "publish",
  "key": null,
  "slug": "rock-solid-react-js-foundations-a-beginners-guide-c45c93f5a923"
}]`
);
const sortOption = {};
class fakeData {
  constructor(size) {
    this.size = size || 2000;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }
  dataModel(index) {
    return tableData[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }
  getSortAsc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'ASC';
    return this.datas.sort(this.sort);
  }
  getSortDesc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'DESC';
    return this.datas.sort(this.sort);
  }
  sort(optionA, optionB) {
    const valueA = optionA[sortOption.sortKey].toUpperCase();
    const valueB = optionB[sortOption.sortKey].toUpperCase();
    let sortVal = 0;
    if (valueA > valueB) {
      sortVal = 1;
    }
    if (valueA < valueB) {
      sortVal = -1;
    }
    if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
      return sortVal * -1;
    }
    return sortVal;
  }
}
export default fakeData;
