import QUERY from './constants/query';
import Scene from './view/scene';

const params = new URLSearchParams(location.search);
const queryImageKey = params.get(QUERY.QR);

console.log('> params:', queryImageKey);

if (!queryImageKey) {
} else {
  document.getElementById('preloaderSpinner')?.remove();

  if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    console.log('Device Video Supported');
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: { ideal: 1280 },
          // facingMode: { exact: 'environment' },
        },
      })
      .then(() => {
        console.log('Video stream allowed');
        const domApp = document.getElementById('app')!;
        const scene = new Scene('test3', 'test');
        window.addEventListener('arjs-nft-loaded', () => {
          console.log('NFT -> loaded');
        });
        domApp.innerHTML = scene.render();
        const nft = domApp.querySelector('#nft')!;
        const video = nft.querySelector('#video')!;
        console.log('NFT -> video', video.getAttribute('rotation'));
        nft.addEventListener('markerFound', () => {
          console.log('NFT -> markerFound');
        });
        nft.addEventListener('markerLost', () => {
          console.log('NFT -> markerLost');
        });
      })
      .catch((e) => {
        console.log('Cant get video stream from device', e);
      });
  }
}
