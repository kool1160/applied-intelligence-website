(function setYear() {
  const footer = document.querySelector('.footer p');
  if (!footer) return;

  const year = new Date().getFullYear();
  footer.textContent = `© ${year} Applied Intelligence · Standardize to Optimize`;
})();
