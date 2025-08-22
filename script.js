// Smooth scroll to bottom section when button is clicked
document.getElementById('learnMoreBtn').addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});