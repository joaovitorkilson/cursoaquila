
import PhotoSwipeLightbox from '../global/photoswipe/photoswipe-lightbox.esm.js';

export default function gallery() {
  

  const lightbox = new PhotoSwipeLightbox({
    gallery: '#my-gallery',
    children: 'a',
    pswpModule: () => import('../global/photoswipe/photoswipe.esm.js'),
  });
  
  lightbox.init();

}