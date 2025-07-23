const container = document.querySelector('.container');
const element = document.querySelector('.menu');
const title = document.querySelector('.text');
container.addEventListener('scroll', () => {
  const scroll = container.scrollTop;
  const maxScroll = container.scrollHeight;
  const progress = Math.min(scroll / maxScroll, 1)
  element.style.opacity = `${progress * 2}`;
  title.style.opacity = `${1 - progress * 2}`;
})
