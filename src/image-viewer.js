import '../styles/image-viewer.css';
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

const bigImg = document.createElement('img');
const smallImg = document.createElement('img');

bigImg.src = big;
smallImg.src = small;

document.body.appendChild(bigImg);
document.body.appendChild(smallImg);
