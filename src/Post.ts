import * as moment from 'moment';

export class Post {
  public date: string = moment().format('MMM Do YY');

  constructor(public title: string, public image: string) {}

  toString() {
    return JSON.stringify(new Post(this.title, this.image));
  }
}
