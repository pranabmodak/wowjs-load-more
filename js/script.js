/*function textChange(){

     document.getElementsByClassName('h2')[0].innerHTML = "Praise the Almighty";
     document.getElementsByClassName('h2')[0].style.fontSize = "50px";
     document.getElementsByClassName('h2')[1].innerHTML = Date();
     document.getElementsByClassName('h2')[1].style.color = "tomato";
}
function textChangeOne(){

     var text = "Hail to the Almighty.";
     document.getElementById('h4').innerHTML = text.repeat(5);
}

function imageOne(){
     document.getElementById('img').src ="images/img1.jpg";
}

function imageTwo(){
     document.getElementById('img').src ="images/img2.jpg";
}
function textChangeTwo(){
     document.getElementById('h2').innerHTML = "Welcome to the world of coding";
}

function alertMessage() {
     window.alert("This is alert message");
}
function alertMessagetwo() {
     document.write("I love coding");
}
*/
wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('more').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };
//jq starts
$(document).ready(function(){
    
});