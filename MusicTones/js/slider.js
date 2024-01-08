const pb = [
  { path: "sld-buddy-guy.jpg", background: '#d3c7ba' },
  { path: "sld-elton.jpg",     background: '#efe3d7' },
  { path: "sld-hendrix.jpg",   background: '#f6cda7' },
  { path: "sld-mozart.jpg",    background: '#f5a46f' },
  { path: "sld-shaw.jpg",      background: '#c5c5c5' },
  { path: "sld-tommy1.jpg",    background: '#d4b194' },
  { path: "sld-waits.jpg",     background: '#c1c1c1' },
  { path: "sld-adams.jpg",     background: '#d1f1ff' },
  { path: "sld-ray.jpg",       background: '#d1f1ff' },
  { path: "sld-hugo.jpg",      background: '#c5bcb3' }
];

const sliderButtons = document.querySelectorAll("[data-slider-button-nav]")
sliderButtons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.sliderButtonNav === "next" ? 1 : -1
    const slider = button.closest("#slider")
    const slides = slider.querySelector(".slides")
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active

    const bullets = slider.querySelector(".slider-bullets")
    bullets.children[newIndex].checked = true

    const section = button.closest("#welcome-section")
    console.log(section)
    section.style.backgroundColor = slides.children[newIndex].dataset.color
  })
})

const sliderBullets = document.querySelectorAll(".slider-bullet")
sliderBullets.forEach(bullet => {
  bullet.addEventListener("click", () => {  
    const sliderBullets = bullet.parentElement
    let newIndex = [...sliderBullets.children].indexOf(bullet)
    const slides = bullet.closest("#slider").querySelector(".slides")
    const activeSlide = slides.querySelector("[data-active]")
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active

    const section = bullet.closest("#welcome-section")
    section.style.backgroundColor = slides.children[newIndex].dataset.color
  })
})




function setRandomSliderImages() {
  const pb = [
    { path: "sld-buddy-guy.jpg", background: '#d3c7ba' },
    { path: "sld-elton.jpg",     background: '#efe3d7' },
    { path: "sld-hendrix.jpg",   background: '#f6cda7' },
    { path: "sld-mozart.jpg",    background: '#f5a46f' },
    { path: "sld-shaw.jpg",      background: '#c5c5c5' },
    { path: "sld-tommy1.jpg",    background: '#d4b194' },
    { path: "sld-waits.jpg",     background: '#c1c1c1' },
    { path: "sld-adams.jpg",     background: '#d1f1ff' },
    { path: "sld-ray.jpg",       background: '#d1f1ff' },
    { path: "sld-hugo.jpg",      background: '#c5bcb3' }
  ];
  
  (() => {
    random_index = Math.floor(Math.random() * pb.length);
    selected_pb = pb[random_index]

    document.getElementById('slider-img').src = `static/images/${selected_pb.path}`
    document.getElementById('welcome-section').style.backgroundColor = selected_pb.background
  })();
}

