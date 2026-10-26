document.querySelectorAll('[data-compare]').forEach((slider) => {
  const range = slider.querySelector('.compare-range');
  range.addEventListener('input', () => {
    slider.style.setProperty('--pos', `${range.value}%`);
  });
});

document.querySelectorAll('.copy-btn').forEach((button) => {
  const label = button.querySelector('span:last-child');
  button.addEventListener('click', async () => {
    const text = document.getElementById(button.dataset.copyTarget).textContent;
    await navigator.clipboard.writeText(text);
    label.textContent = 'Copied!';
    setTimeout(() => { label.textContent = 'Copy'; }, 1500);
  });
});
