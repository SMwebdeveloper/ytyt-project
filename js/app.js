  //    sidebar add
  document.getElementById("navbar-btn").addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("sidebar-none");
    document.getElementById("sidebar").classList.add("sidebar-hidden");
  });

  // sidebar remove
  document.getElementById("sidebar-btn").addEventListener("click", () => {
    document.getElementById("sidebar").classList.add("sidebar-none");
    document.getElementById("sidebar").classList.remove("sidebar-hidden");
  });

//   modal 

const btnTest = document.getElementById('btn-test');

const modal = document.getElementById('modal');

const modalItem1 = document.getElementById('modal-1');
const modalItem2 = document.getElementById('modal-2');
const modalItem3 = document.getElementById('modal-3');
const modalItem4 = document.getElementById('modal-4');

const modalBtnTimes = document.querySelectorAll('.btn--times');

const modalBtn1 = document.getElementById('modal-btn-1');
const modalBtn2 = document.getElementById('modal-btn-2');
const modalBtn3 = document.getElementById('modal-btn-3');
const modalBtn4 = document.getElementById('modal-btn-4');

console.log(modalItem1);
btnTest.addEventListener('click', () =>{
    modal.classList.add('modal-hidden');
    modalItem1.style.visibility = 'visible'
})
