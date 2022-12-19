// Project 1
var btnAbrirPopup = document.getElementById('proj1-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function() {
  overlay.classList.add('active');
  popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e) {
  e.preventDefault();
  overlay.classList.remove('active');
  popup.classList.remove('active');
});

overlay.addEventListener('click', function(event) {
  if (event.target === overlay) {
    overlay.classList.remove('active');
    popup.classList.remove('active');
  }
});

// Project 2
var btnAbrirPopup2 = document.getElementById('proj2-popup'),
    overlay2 = document.getElementById('overlay2'),
    popup2 = document.getElementById('popup2'),
    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');

btnAbrirPopup2.addEventListener('click', function() {
  overlay2.classList.add('active');
  popup2.classList.add('active');
});

btnCerrarPopup2.addEventListener('click', function(e) {
  e.preventDefault();
  overlay2.classList.remove('active');
  popup2.classList.remove('active');
});

overlay2.addEventListener('click', function(event) {
  if (event.target === overlay2) {
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
  }
});

// Project 3
var btnAbrirPopup3 = document.getElementById('proj3-popup'),
    overlay3 = document.getElementById('overlay3'),
    popup3 = document.getElementById('popup3'),
    btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3');

btnAbrirPopup3.addEventListener('click', function() {
  overlay3.classList.add('active');
  popup3.classList.add('active');
});

btnCerrarPopup3.addEventListener('click', function(e) {
  e.preventDefault();
  overlay3.classList.remove('active');
  popup3.classList.remove('active');
});

overlay3.addEventListener('click', function(event) {
  if (event.target === overlay3) {
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
  }
});

// Project 4
var btnAbrirPopup4 = document.getElementById('proj4-popup'),
    overlay4 = document.getElementById('overlay4'),
    popup4 = document.getElementById('popup4'),
    btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4');

btnAbrirPopup4.addEventListener('click', function() {
  overlay4.classList.add('active');
  popup4.classList.add('active');
});

btnCerrarPopup4.addEventListener('click', function(e) {
  e.preventDefault();
  overlay4.classList.remove('active');
  popup4.classList.remove('active');
});

overlay4.addEventListener('click', function(event) {
  if (event.target === overlay4) {
    overlay4.classList.remove('active');
    popup4.classList.remove('active');
  }
});
