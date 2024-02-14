  document.addEventListener('DOMContentLoaded', function () {
      var preloader = document.getElementById('loading');
      if (preloader){
      preloader.style.display = 'none';
  };
})

var typed = new Typed((".motion"),{
  strings : ["C++ and DSA","Frontend Developer", "Machine Learning","UI Designer", "Content Creator", "E-sports Athlete"],
  typeSpeed : 100,
  backspeed : 100,
  backdelay : 1000,
  loop :  true
})