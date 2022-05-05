// ----------Menu----------

((d) => {
  
const $btnToggle = d.querySelector(".header")
$nav = d.querySelector(".nav-container")
$body = d.querySelector(".body");
$navLink = d.querySelectorAll(".nav-link");

// $navLink = d.querySelectorAll(".nav-link");

$btnToggle.addEventListener('click', (e) => {
$btnToggle.classList.toggle('animation-btn')
$nav.classList.toggle('nav-cutout')
$body.classList.toggle('body-pl')

// btnToggle.classList.toggle('animation-btn')

setTimeout(() => {
  $btnToggle.lastElementChild.classList.toggle('none')
  $btnToggle.firstElementChild.classList.toggle('none')
  
}, 500);
setTimeout(() => {
  $btnToggle.classList.remove('animation-btn')
  
}, 1000);
})

function colorLink () {
  
  if($navLink) {
    $navLink.forEach(l => l.classList.remove('nav-active'));
    this.classList.add('nav-active')
  }
}
$navLink.forEach(l=> l.addEventListener('click', colorLink))

})(document);



// ----------Animation(Intersection Observer)----------


((d) => {
  const $section_1 = d.querySelector('.description-list')
  $section_2 = d.querySelector('.description-img')
  $section_3 = d.querySelector('.installation-img')
  $section_4 = d.querySelector('.installation');
  $section_5 = d.querySelector('.description-title')
  $section_6 = d.querySelector('.installation-title');
  $section_7 = d.querySelector('.ice-container');
  $section_8 = d.querySelector('.contact-title');
  $section_9 = d.querySelector('.contact-text');
  $section_10 = d.querySelector('.contact-img');
  $section_11 = d.querySelector('.contact-social-media');

const loadSection = (entry, obs) => {
  entry.forEach((el) => {
    if(el.isIntersecting) {
      el.target.classList.add('a-translate')
    }
  })
}
const obs = new IntersectionObserver (loadSection , {
  root: null,
  // rootMargin: '0px 0px -350px 0px' ,
  rootMargin: '0px 0px -200px 0px' ,
  // threshold: 0,
})

obs.observe($section_1);
obs.observe($section_2);
obs.observe($section_3);
obs.observe($section_4);
obs.observe($section_5);
obs.observe($section_6);
obs.observe($section_7);
obs.observe($section_8);
obs.observe($section_9);
obs.observe($section_10);
obs.observe($section_11);

})(document);

