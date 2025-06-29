document.querySelectorAll('.marker').forEach(marker => {
  marker.addEventListener('click', () => {
    const url = marker.getAttribute('data-link');
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  });
});
