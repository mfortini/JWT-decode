import { jwtDecode } from 'jwt-decode';

const $tokenInput  = document.getElementById('jwt-input');
const $headerOut   = document.getElementById('header-json');
const $payloadOut  = document.getElementById('payload-json');
const $errorBox    = document.getElementById('error-box');

function pretty(obj) {
  return JSON.stringify(obj, null, 2);
}

function decode() {
  const token = $tokenInput.value.trim();

  if (!token) {
    $headerOut.textContent = $payloadOut.textContent = '';
    $errorBox.classList.add('d-none');
    return;
  }

  try {
    const header  = jwtDecode(token, { header: true });
    const payload = jwtDecode(token);

    $headerOut.textContent  = pretty(header);
    $payloadOut.textContent = pretty(payload);
    $errorBox.classList.add('d-none');

  } catch (err) {
    $headerOut.textContent = $payloadOut.textContent = '';
    $errorBox.textContent  = 'Token non valido: ' + err.message;
    $errorBox.classList.remove('d-none');
  }
}

$tokenInput.addEventListener('input', decode);
decode();
