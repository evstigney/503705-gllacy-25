/*--------СЛАЙДЕР-----------*/

var body = document.querySelector('.index-body');
var radio1 = document.querySelector('label[for="slider-radio-first"]');
var radio2 = document.querySelector('label[for="slider-radio-second"]');
var radio3 = document.querySelector('label[for="slider-radio-third"]');
var sliders = document.querySelectorAll('.slide')

var showSlide = function (element) {
  for (var i = 0; i < sliders.length; i++) {
    sliders[i].style.display = 'none';
  }
  if (element === sliders[0]) {
    body.style.backgroundColor = '#849d8f';
    body.style.backgroundImage = 'url("img/slide1.png")';
  } else if (element === sliders[1]) {
    body.style.backgroundColor = '#8996a6';
    body.style.backgroundImage = 'url("img/slide2.png")';
  } else {
    body.style.backgroundColor = '#9d8b84'
    body.style.backgroundImage = 'url("img/slide3.png")';
  }
  element.style.display = 'flex';
};

radio1.addEventListener('click', function () {
  showSlide(sliders[0]);
});
radio2.addEventListener('click', function () {
  showSlide(sliders[1]);
});
radio3.addEventListener('click', function () {
  showSlide(sliders[2]);
});

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
      top += 10;
      modalFeedback.style.top = top + '%';
    }
  }, 10);
};

var closeModalFeedback = function () {
  var top = parseInt(modalFeedback.style.top, 10);
  var timer = setInterval(function() {
    if (top <= -200) {
      modalFeedback.style.display = 'none';
      clearInterval(timer);
    } else {
      top -= 10;
      modalFeedback.style.top = top + '%';
    }
  }, 10);
};

buttonFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
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
