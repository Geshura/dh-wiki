// Otwieranie linków
document.querySelectorAll('.marker').forEach(marker => {
  marker.addEventListener('click', () => {
    const url = marker.getAttribute('data-link');
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  });
});

// Przycisk ukrywania/pokazywania
const btn = document.getElementById('toggleMarkersBtn');
const markers = document.querySelectorAll('.marker');
let visible = true;

btn.addEventListener('click', () => {
  visible = !visible;
  markers.forEach(marker => {
    marker.style.display = visible ? 'block' : 'none';
  });
  btn.textContent = visible ? 'Ukryj markery' : 'Pokaż markery';
});
