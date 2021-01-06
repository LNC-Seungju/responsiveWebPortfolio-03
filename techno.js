const welcomePrev = document.getElementsByClassName('welcome-prev');
const welcomeNext = document.getElementsByClassName('welcome-next');
const welcomeCon = document.getElementsByClassName('welcome-con');
const welcomePages = document.getElementsByClassName('welcome-page');
let currentIndex = 1;
console.log(currentIndex)
const move = (currentIndex) => {
  welcomeCon[0].style.transform = 'translateX('+currentIndex*-25+'%)';
}

welcomePrev[0].addEventListener('click', () => {
  welcomeCon[0].style.transition = '.3s';
  move(currentIndex - 1);
  currentIndex-=1;
  if(currentIndex==0){
    move(0)
    setTimeout(()=>{
      welcomeCon[0].style.transition = '0s';
      move(2)
      currentIndex=2;
    }, 301);
  }
  console.log(currentIndex)
})
welcomeNext[0].addEventListener('click', () => {
  welcomeCon[0].style.transition = '.3s';
  move(currentIndex + 1);
  currentIndex+=1;
  if(currentIndex==welcomePages.length-1){
    move(welcomePages.length-1)
    setTimeout(()=>{
      welcomeCon[0].style.transition = '0s';
      move(1)
      currentIndex=1;
    }, 301);
  }
  console.log(currentIndex)
})
move(1)

