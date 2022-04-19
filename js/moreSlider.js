let positionMore = 0;

const trackMore = document.querySelector(".more__content-track");
const btnPrevMore = document.querySelector(".more__content_arrow_prev");
const btnNextMore = document.querySelector(".more__content_arrow_next");

const itemWidthMore = 100;
const movePositionMore = 100;
const itemsCountMore = 3;
const slidesToShowMore = 1;
const slideToScrollMore = 1;


btnNextMore.addEventListener('click', () =>{
  const itemsMoreLeft  = itemsCountMore - (Math.abs(positionMore) + slidesToShowMore * itemWidthMore) / itemWidthMore;
  positionMore -= itemsMoreLeft >= slideToScrollMore ? movePositionMore : itemsMoreLeft * itemWidthMore;

  setPositionMore();
  checkBtnMore();
})

btnPrevMore.addEventListener('click', () =>{
  const itemsMoreLeft  =  Math.abs(positionMore) / itemWidthMore;
  positionMore += itemsMoreLeft >= slideToScrollMore ? movePositionMore : itemsMoreLeft * itemWidthMore;

  setPositionMore();
  checkBtnMore();
})

const setPositionMore = () => {
  trackMore.style.transform = `translateX(${positionMore}%)`;
}

const checkBtnMore = () => {
  btnPrevMore.disabled = positionMore === 0;
  btnNextMore.disabled = positionMore <= -(itemsCountMore - slidesToShowMore) * itemWidthMore;
}

checkBtnMore();