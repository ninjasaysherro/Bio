const homeButton = document.querySelector('#home');
const resumeButton = document.querySelector('#resume');

homeButton.addEventListener('click', (button) => {
  location.assign('/html/index.html');
});

resumeButton.addEventListener('click', (button) => {
  location.assign('Resume7.19.22.pdf');
});
