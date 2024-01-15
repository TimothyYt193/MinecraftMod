function openWebsite(url) {
  window.open(url, "_blank");
}

function onClick() {
  var audio = new Audio('sounds/button_click.ogg');
  audio.play();
}

document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.custom-cursor');
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
