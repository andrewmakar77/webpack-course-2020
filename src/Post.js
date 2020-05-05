export class Post {
  constructor(title, image) {
    this.title = title;
    this.date = new Date();
    this.image = image;
  }

  toString() {
    return JSON.stringify(new Post(this.title, this.image));
  }
}
