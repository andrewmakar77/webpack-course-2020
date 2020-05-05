import './styles/styles.css';
import db from '@app/assets/db.json';
import logo from '@app/assets/logo.png';
import babelLogo from '@app/assets/babel.png';
import xmlLetter from '@app/assets/letter';
import csv from '@app/assets/data-csv';
import { Post } from '@app/Post';

const post = new Post('New post', logo);
const postEl = document.querySelector('.post');
postEl.innerHTML = post.toString();

console.log('JSON:', db);
console.log('CSV:', csv);
console.log('XML:', xmlLetter);

const loadBabelLogo = () => {
  const babelLogoImg = new Image();
  babelLogoImg.src = babelLogo;
  babelLogoImg.onload = () => {
    babelLogoImg.style.height = '100px';
    postEl.before(babelLogoImg);
  };
};

loadBabelLogo();
