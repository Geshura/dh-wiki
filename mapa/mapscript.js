document.querySelectorAll('.marker').forEach(marker => {
  marker.addEventListener('click', () => {
    alert(`Kliknięto: ${marker.title}`);
  });
});
