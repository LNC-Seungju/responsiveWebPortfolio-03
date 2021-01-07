// Welcome Section Slider
const welcomePrev = document.getElementsByClassName('welcome-prev');
const welcomeNext = document.getElementsByClassName('welcome-next');
const welcomeCon = document.getElementsByClassName('welcome-con');
const welcomePages = document.getElementsByClassName('welcome-page');
let currentIndex = 1;

// Move Function
const move = (currentIndex) => welcomeCon[0].style.transform = 'translateX('+currentIndex*-25+'%)'

// Previous Button
welcomePrev[0].addEventListener('click', () => {
  welcomeCon[0].style.transition = '.5s';
  move(currentIndex - 1);
  currentIndex -= 1;
  if(currentIndex == 0){
    move(0)
    setTimeout( () => {
      welcomeCon[0].style.transition = '0s';
      move(2)
      currentIndex = 2;
    }, 501);
  }
})
// Next Button
welcomeNext[0].addEventListener('click', () => {
  welcomeCon[0].style.transition = '.5s';
  move( currentIndex + 1);
  currentIndex += 1;
  if( currentIndex == welcomePages.length-1 ){
    move( welcomePages.length-1 )
    setTimeout( () => {
      welcomeCon[0].style.transition = '0s';
      move(1)
      currentIndex = 1;
    }, 501);
  }
})
move(1)

// Header Scroll Event
const pcHeader = document.getElementsByClassName('pc-header');

window.addEventListener('scroll', () => {
  if( scrollY > 300 ) pcHeader[0].classList.add('fill')
  else pcHeader[0].classList.remove('fill')
})

// Header Trigger 
const headerTrigger = document.getElementsByClassName('header-trigger');
const nav = document.getElementsByClassName('nav');
const submenu = document.getElementsByClassName('nav-submenu');
const navTitle = document.getElementsByClassName('nav-title');

headerTrigger[0].addEventListener('click', ()=> {
  headerTrigger[0].classList.toggle('active');
  nav[0].classList.toggle('slide-down');
})
for( let i=  0; i < navTitle.length; i++ ) {
  navTitle[i].addEventListener('click', () => {
    submenu[i].classList.toggle('active');
  })
}
