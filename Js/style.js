if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function checkForm(form)
  {
  	if(form.FirstName.value == "") {
      alert("Error: FirstName cannot be blank!");
      form.FirstName.focus();
      return false;
   }
     re = /^[A-Za-z]+$/;
    if(!re.test(form.FirstName.value)) {
      alert("Error: Username must contain only letters!");
      form.FirstName.focus();
      return false;
    }

    
    if(form.LastName.value == "") {
      alert("Error: LastName cannot be blank!");
      form.LastName.focus();
      return false;
    }

    re = /^[A-Za-z]+$/;
    if(!re.test(form.LastName.value)) {
      alert("Error: LastName must contain only letters!");
      form.LastName.focus();
      return false;
    }
  	
    if(form.username.value == "") {
      alert("Error: Username cannot be blank!");
      form.username.focus();
      return false;
    }
    
    re = /([0-9].*[a-z])|([a-z].*[0-9])/;
    if(!re.test(form.username.value)) {
      alert("Error: Username must include Characters and Numbers!");
      form.username.focus();
      return false;
    }

    if(form.email.value == "") {
      alert("Error: e-mail cannot be blank!");
      form.email.focus();
      return false;
    }
    
    re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(form.email.value)) {
      alert("Error: Please enter a valid email!");
      form.email.focus();
      return false;
    }

    if(form.telephoneNo.value == "") {
      alert("Error: Telephone No cannot be blank!");
      form.telephoneNo.focus();
      return false;
    }

    
    re = /^-?\d*$/;
    if(!re.test(form.telephoneNo.value)) {
      alert("Error: Input a Valid Phone No!");
      form.telephoneNo.focus();
      return false;
    }

    if(form.Country.value == "") {
      alert("Please Enter your Country!");
      form.Country.focus();
      return false;
    }


    re = /^[A-Za-z]+$/;
    if(!re.test(form.Country.value)) {
      alert("Error: Enter a valid country!");
      form.Country.focus();
      return false;
    }

    if(form.pwd1.value != "" ) {
      if(form.pwd1.value.length < 6) {
        alert("Error: Password must contain at least six characters!");
        form.pwd1.focus();
        return false;
      }
      if(form.pwd1.value == form.username.value) {
        alert("Error: Password must be different from Username!");
        form.pwd1.focus();
        return false;
      }
      re = /[0-9]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        form.pwd1.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        form.pwd1.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(form.pwd1.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        form.pwd1.focus();
        return false;
      }
    } else {
      alert("Error: Please check that you've entered and confirmed your password!");
      form.pwd1.focus();
      return false;
    }

    alert("You Have Succesfully Registered on SHEbay");
    return true;
  }

  //login validation

  function validateForm() {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pword.value;
        var username = "thawhyte1"; 
        var password = "Surulere1";
        if ((un == username) && (pw == password)) {
          alert("Welcome thawhyte");
          window.location="sec.html";
            return true;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            return false;
        }
  }

  // susbcribing to newletter
function ValidateEmail(inputText)
    {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var empty= " ";
    if(inputText.value.match(mailformat))
    {
     alert("Thank you for Subscribing to SHEbay Newsletter channel, we shall keep you informed on our latest product!"); 
    document.form1.text1.focus();
    return true;
    }
    else{
    alert("Please enter a invalid email address!");
    document.form1.text1.focus();
    return false;
    }
}


//slider 
'use strict';

$(function() {

    //settings for slider
    var width = 1000;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});
