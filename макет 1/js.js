
const showFormBtn = document.getElementById('show-form-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementsByClassName('close')[0];
showFormBtn.addEventListener('click', function() {
  modal.style.display = 'block'; 
});

closeModal.addEventListener('click', function() {
  modal.style.display = 'none'; 
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none'; 
  }
});
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

  });
  