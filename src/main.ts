import QUERY from "./constants/query";

const params = new URLSearchParams(location.search);
const queryImageKey = params.get(QUERY.QR);
console.log('> params:', queryImageKey);

if (!queryImageKey) {

} else {
  document.getElementById('preloaderSpinner')?.remove();
}
