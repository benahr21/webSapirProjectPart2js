//mouse overs and mouse out calls
document.getElementById("desc").onmouseover = function() {mouseOver()};
document.getElementById("desc").onmouseout = function() {mouseOut()};
document.getElementById("desc1").onmouseover = function() {mouseOver1()};
document.getElementById("desc1").onmouseout = function() {mouseOut1()};
document.getElementById("desc2").onmouseover = function() {mouseOver2()};
document.getElementById("desc2").onmouseout = function() {mouseOut2()};

//Functions


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

//Show slides gallery

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//Mouse over/out for hover functions

function mouseOver() {
    document.getElementById("desc").style.fontSize = "120%";
}


function mouseOut() {
    document.getElementById("desc").style.fontSize = "100%";
}
function mouseOver1() {
    document.getElementById("desc1").style.fontSize = "120%";
}


function mouseOut1() {
    document.getElementById("desc1").style.fontSize = "100%";
}
function mouseOver2() {
    document.getElementById("desc2").style.fontSize = "120%";
}


function mouseOut2() {
    document.getElementById("desc2").style.fontSize = "100%";
}

// table hover function
    window.onload=function f(){
    var tfrow = document.getElementById('myTable').rows.length;
    var tbRow=[];
    for (var i=1;i<tfrow;i++) {
        tbRow[i]=document.getElementById('myTable').rows[i];
        var tfcell=tbRow[i].cells.length;
        for(var j=0;j<tfcell;j++){
            var _tbCell=tbRow[i].cells[j];
            _tbCell.onmouseover=function(){
                this.style.backgroundColor = 'rgba(255,255,255,0.7)';
                this.style.color ='black';
            }
            _tbCell.onmouseout=function(){
                this.style.backgroundColor = 'black';
                this.style.color = 'white';
            }
        }
    }
}

//Validation for only letters (For Full Name)

function allLetter(inputtxt) {
    var letters = /^[a-z]*$/i;
    if (!inputtxt.value.match(letters)) {
        alert('Please input letters only');
    }
}

//Validation for only numbers (For Phone Number Form)

function allNumeric(inputtxt)
{
    var numbers = /^[0-9]+$/;
    if(!inputtxt.value.match(numbers)){
        alert('Please input letters only');

    }


//Check number of guests if less than zero

}
function checkGuests(intputtxt) {
    if(intputtxt.value==""||intputtxt.value<1){
        alert('Not valid value for number of guests, fix it')
    }
}

//Mail validation function

function mailCheck(emailField){

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false)
    {
        alert('Invalid Email Address');

    }

//Check Number Of Digits In Phone Numbers

}
function checkDigits() {
    var value=document.getElementById("phone").value;
    if(value.length<9 ||value.length>10){
        alert('Min Numbers: 9. Max numbers: 10 Check your phone number please'  );
    }


    // Text counter for 'additional comments

}
function countText(text, counter, max) {
    // if text too long, cut it to max length
    if (text.value.length > max)
        text.value = text.value.substring(0, max);
    // update counter
    else
        counter.value = max - text.value.length;
}

    //MODAL//

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

