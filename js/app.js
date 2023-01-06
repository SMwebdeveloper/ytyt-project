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

document.getElementById('button-0').addEventListener('click', ()=>{
  document.getElementById('modal').classList.add('modal-hidden')
  document.getElementById('modal-1').style.display = 'flex'
})
document.getElementById('modal-btn-1').addEventListener('click', () => {
  document.getElementById('modal-1').style.display = 'none'
  document.getElementById('modal-2').style.display = 'block'
})

document.getElementById('modal-btn-2').addEventListener('click', () => {
  document.getElementById('modal-2').style.display = 'none'
  document.getElementById('modal-3').style.display = 'block'
})

document.getElementById('modal-btn-3').addEventListener('click', () => {
  document.getElementById('modal-3').style.display = 'none'
  document.getElementById('modal-4').style.display = 'flex'
})
document.getElementById('modal-btn-4').addEventListener('click', () => {
  document.getElementById('modal-4').style.display = 'none'
  document.getElementById('modal').classList.remove('modal-hidden')
})
document.getElementById('modal-btn-times').addEventListener('click', ()=>{
  document.getElementById('modal').classList.remove('modal-hidden')
  document.getElementById('modal-1').style.display = 'none'
  document.getElementById('modal-2').style.display = 'none'
  document.getElementById('modal-3').style.display = 'none'
  document.getElementById('modal-4').style.display = 'none'
})