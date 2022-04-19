let positionMugs = 0;

const trackMugs = document.querySelector(".mugs__content_item-track");
const btnPrevMugs = document.querySelector(".mugs__content_arrow_prev");
const btnNextMugs = document.querySelector(".mugs__content_arrow_next");

const itemWidthMugs = 100;
const movePositionMugs = 100;
const itemsCountMugs = 2;
const slidesToShowMugs = 1;
const slideToScrollMugs = 1;


btnNextMugs.addEventListener('click', () =>{
  const itemsMugsLeft  = itemsCountMugs - (Math.abs(positionMugs) + slidesToShowMugs * itemWidthMugs) / itemWidthMugs;
  positionMugs -= itemsMugsLeft >= slideToScrollMugs ? movePositionMugs : itemsMugsLeft * itemWidthMugs;

  setPositionMugs();
  checkBtnMugs();
})

btnPrevMugs.addEventListener('click', () =>{
  const itemsMugsLeft  =  Math.abs(positionMugs) / itemWidthMugs;
  positionMugs += itemsMugsLeft >= slideToScrollMugs ? movePositionMugs : itemsMugsLeft * itemWidthMugs;

  setPositionMugs();
  checkBtnMugs();
})

const setPositionMugs = () => {
  trackMugs.style.transform = `translateX(${positionMugs}%)`;
}

const checkBtnMugs = () => {
  btnPrevMugs.disabled = positionMugs === 0;
  btnNextMugs.disabled = positionMugs <= -(itemsCountMugs - slidesToShowMugs) * itemWidthMugs;
}

checkBtnMugs();