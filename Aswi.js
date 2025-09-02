

$(document).ready(function () {
    $('.menu a').click(function () {
      const activePage=window.location.hash;
  //removing the previous selected menu state
        $('.menu').find('li.active').removeClass('active');
        //adding the state for this parent menu
        $(this).parents("li").addClass('active');
  });


document.querySelectorAll('.project').forEach(card => {
  card.addEventListener('click', () => {
    showCustomAlert('Project clicked!');
    document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });
  });
});

function showCustomAlert(message) {
  document.getElementById('customAlertMsg').textContent = message;
  document.getElementById('customAlert').style.display = 'flex';
}

function closeCustomAlert() {
  document.getElementById('customAlert').style.display = 'none';
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}



 }); 





  

