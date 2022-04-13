let nav = document.querySelector('.header_list'),
    button = document.querySelector('.burger'),
    link = document.querySelector('.header_list-link'),
    body = document.querySelector('.body');

    button.addEventListener('click', () => {
      nav.classList.toggle('active');
      button.classList.toggle('active')
    })

    link.addEventListener('click', () => {
      nav.classList.toggle('active');
      button.classList.toggle('active')
    })




// projects slider

let projectSlideIndex = 0;
showProjectsSlides();

function showProjectsSlides() {
  let i;
  let slidesProject = document.getElementsByClassName("slide");
  for (i = 0; i < slidesProject.length; i++) {
    slidesProject[i].style.display = "none";
  }
  projectSlideIndex++;
  if (projectSlideIndex > slidesProject.length) {projectSlideIndex = 1}
  slidesProject[projectSlideIndex-1].style.display = "block";
  setTimeout(showProjectsSlides, 2000); // Change image every 2 seconds
}