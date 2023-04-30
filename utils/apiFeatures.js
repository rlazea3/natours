class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.query.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    }
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.query.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    }
    return this;
  }
}

module.exports = APIFeatures;
