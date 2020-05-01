import { Post } from './Post';

const post = new Post('New post');
document.querySelector('.post').innerHTML = post.toString();
