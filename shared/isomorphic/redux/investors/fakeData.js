const tableData = JSON.parse(
  `[{
  "id": "1",
  "name": "John Doe",
  "deleted_at": null,
  "exists_count": "70",
  "investment_count": "100",
  "job_title": "Data Scientist",
  "key": "eradf",
  "location": "New York, USA",
  "company_name": "Apple, Inc"
}, {
  "id": "2",
  "name": "Jae Doe",
  "deleted_at": null,
  "exists_count": "80",
  "investment_count": "100",
  "job_title": "Data Minning Engineer",
  "key": "eradf",
  "location": "Sillicon Valley, USA",
  "company_name": "Uber"
}, {
  "id": "3",
  "name": "Robertson Jane",
  "deleted_at": null,
  "exists_count": "50",
  "investment_count": "60",
  "job_title": "Project Architect",
  "key": "eradf",
  "location": "Mountain View, USA",
  "company_name": "TechCrunch"
}, {
  "id": "4",
  "name": "Jake Baw",
  "deleted_at": null,
  "exists_count": "70",
  "investment_count": "100",
  "job_title": "Sr. Software Engineer",
  "key": "eradf",
  "location": "Hangzhou, Zhejiang, China",
  "company_name": "AliExpress"
}, {
  "id": "5",
  "name": "John Doe",
  "deleted_at": null,
  "exists_count": "1",
  "investment_count": "1",
  "job_title": "CTO",
  "key": "eradf",
  "location": "Dupont Highway, Dover, Delaware, USA",
  "company_name": "RedQ, Inc"
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
