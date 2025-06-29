document.querySelectorAll('.marker').forEach(marker => {
  marker.addEventListener('click', () => {
    const link = marker.getAttribute('data-link');
    if (link) {
      window.location.href = link;
    }
  });
});

const toggleBtn = document.getElementById('toggleMarkersBtn');
toggleBtn?.addEventListener('click', () => {
  const markers = document.querySelectorAll('.marker');
  const areHidden = toggleBtn.textContent.includes('Pokaż');
  markers.forEach(marker => marker.style.display = areHidden ? 'block' : 'none');
  toggleBtn.textContent = areHidden ? 'Ukryj markery' : 'Pokaż markery';
});
