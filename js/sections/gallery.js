
import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';

export default function gallery() {
  

  const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: () => import('https://unpkg.com/photoswipe'),
  });
  
  lightbox.init();

}