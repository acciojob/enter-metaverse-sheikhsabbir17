const statusEl = document.getElementById('status');
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', () => {
  const heading = document.createElement('h1');
  heading.id = 'status';
  heading.textContent = 'Entered Metaverse';
  statusEl.replaceWith(heading);
});