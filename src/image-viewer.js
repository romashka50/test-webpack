import '../styles/image-viewer.css';
import small from '../assets/small.jpg';

export default () => {
  const smallImg = document.createElement('img');

  smallImg.src = small;

  document.body.appendChild(smallImg);
};
