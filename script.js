const plusBtns = document.querySelectorAll(".icon-plus");
console.log(plusBtns);
const minusBtns = document.querySelectorAll(".icon-minus");
console.log(minusBtns);

const openContent = (event) => {
const plusBtn = event.target;
const minusBtn = plusBtn.nextElementSibling;
const accordion = event.target.parentElement.parentElement.nextElementSibling;
accordion.classList.add('active');
console.log(accordion);

plusBtn.style.display = 'none';
minusBtn.style.display = 'block';

}
const closeContent = (event) => {
const minusBtn = event.target;
const plusBtn = minusBtn.previousElementSibling;
const accordion = event.target.parentElement.parentElement.nextElementSibling;
accordion.classList.remove('active');
minusBtn.style.display = 'none';
plusBtn.style.display = 'block';

}

for (const plusBtn of plusBtns) {
  plusBtn.addEventListener('click', openContent);
}
for (const minusBtn of minusBtns) {
  minusBtn.addEventListener('click', closeContent);
}