document.querySelectorAll('.marker').forEach(marker => {
  marker.addEventListener('click', () => {
    const url = marker.dataset.url;
    if (url) {
      window.open(url, '_blank');  // otwiera link w nowej karcie
    }
  });
});
