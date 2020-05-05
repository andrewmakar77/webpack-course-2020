import * as moment from 'moment';
export class Post {
  constructor(title, image) {
    this.title = title;
    this.date = moment().format('MMM Do YY');
    this.image = image;
  }

  toString() {
    return JSON.stringify(new Post(this.title, this.image));
  }
}
