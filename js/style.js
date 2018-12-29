var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slideQuote");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex} {slides.length}
    for (i = 0; i  < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i <dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}


function moreDonate(){
    var x = document.getElementById('moreDonate');
    if(x.style.display === 'none'){
        x.style.display = 'block';
    } else {
    x.style.display = 'none';
    }
}


function DonateNow(){
    // $('.subscribs.button').click("show"){

    // }

    var y = document.getElementById('donatenow');
    if(y.style.display === 'none'){
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }
}