/*-------МОДАЛЬНОЕ ОКНО--------*/

var buttonFeedback = document.querySelector('.feedback-open');
var buttonClose = document.querySelector('.modal-close');
var modalFeedback = document.querySelector('.modal-feedback');

var openModalFeedback = function () {
  var top = -200;
  modalFeedback.style.top = top + '%';
  modalFeedback.style.display = 'block';
  var timer = setInterval(function() {
    if (top >= 50) {
      clearInterval(timer);
    } else {
      top += 1;
      modalFeedback.style.top = top + '%';
    }
  }, 0.5);
};

var closeModalFeedback = function () {
  var top = parseInt(modalFeedback.style.top, 10);
  var timer = setInterval(function() {
    if (top <= -200) {
      modalFeedback.style.display = 'none';
      clearInterval(timer);
    } else {
      top -= 1;
      modalFeedback.style.top = top + '%';
    }
  }, 0.1);
};

buttonFeedback.addEventListener('click', function () {
  openModalFeedback();
});

buttonClose.addEventListener('click', function () {
  closeModalFeedback();
});

/*-----------ИНТЕРАКТИВНАЯ КАРТА---------*/

var initMap = function () {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 59.939563, lng: 30.329135},
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: {lat: 59.938904, lng: 30.324215},
    icon: 'img/map-marker.png',
    map: map
  });
};
