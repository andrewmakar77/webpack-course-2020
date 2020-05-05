import * as moment from 'moment';
export class Post {
  title;
  image;
  date = moment().format('MMM Do YY');

  constructor(title, image) {
    this.title = title;
    this.image = image;
  }

  toString() {
    return JSON.stringify(new Post(this.title, this.image));
  }
}
