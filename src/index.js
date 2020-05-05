import './styles/styles.css';
import db from './assets/db.json';
import logo from './assets/logo.png';
import babelLogo from './assets/babel.png';
import { Post } from './Post';

const post = new Post('New post', logo);
const postEl = document.querySelector('.post');
postEl.innerHTML = post.toString();

console.log('JSON:', db);

const loadBabelLogo = () => {
  const babelLogoImg = new Image();
  babelLogoImg.src = babelLogo;
  babelLogoImg.onload = () => {
    babelLogoImg.style.height = '100px';
    postEl.before(babelLogoImg);
  };
};

loadBabelLogo();
