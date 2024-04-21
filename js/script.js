
/* Nav Section Start */

const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

allEventListners();

function allEventListners() {
 
  navToggler.addEventListener('click', togglerClick);
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

/* Nav Section End */

/* Home Slider Start */

$('.home-section').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite:true,
    dots:false,
    arrows:true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        }
      }
    ]
  })

/* Home Slider End */

 /* Pie chart start */
        
 var data = {
  datasets: [{
      data: [31,50,24,15,8],
      backgroundColor: ["#808080", "#0000FF", "#FFFF00","#00A79D","#FF0000"] 
  }]
};

var ctx = document.getElementById('myPieChart').getContext('2d');

var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: data
});

/* pie chart end */

/* Faq Section Start */

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const icon = question.querySelector('.icon');

      question.addEventListener('click', function () {
          faqItems.forEach(innerItem => {
              if (innerItem !== item && innerItem.classList.contains('open')) {
                  innerItem.classList.remove('open');
                  innerItem.querySelector('.icon').classList.replace('fa-minus', 'fa-plus');
              }
          });

          item.classList.toggle('open');
          icon.classList.toggle('fa-minus');
          icon.classList.toggle('fa-plus');
      });
  });
});

/* Faq Section End */

// Generate a random captcha code
function generateCaptcha() {
  let captchaCode = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const codeLength = 6;

  for (let i = 0; i < codeLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    captchaCode += characters.charAt(randomIndex);
  }


  const captchaImage = document.getElementById("captchaImage");
  captchaImage.innerHTML = `<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='40' viewBox='0 0 100 40'%3E%3Crect width='100%' height='100%' fill='%23f5f5f5'/%3E%3Ctext x='50' y='50%' alignment-baseline='middle' text-anchor='middle' font-size='20' font-family='Arial' fill='%23000'%3E${captchaCode}%3C/text%3E%3C/svg%3E" alt="Captcha">`;

}

function validateCaptcha() {
  const userEnteredCaptcha = document.getElementById("captchaInput").value;
  const actualCaptcha = document.getElementById("captchaInput").value;

  if (userEnteredCaptcha === actualCaptcha) {
    alert("Captcha is correct! Proceed.");
  } else {
    alert("Captcha is incorrect. Please try again.");
  }

  generateCaptcha();
}

generateCaptcha();

/* scroll to top button start */

myButton = document.getElementById("myBtn")
window.onscroll = function(){
scrollFunction()
}
function scrollFunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  myButton.style.display = "block"
}else{
  myButton.style.display = "none"
}
}

function topFunction(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0 
}

/* scroll to top button end */

function copyText() {
  var defaultInput = document.getElementById("defaultInput");
  defaultInput.select();
  
  try {
      var successful = document.execCommand('copy');
      var message = successful ? 'successful' : 'unsuccessful';
      alert('Copied');
  } catch (err) {
      // console.error('Unable to copy text');
  } 
  window.getSelection().removeAllRanges();
}
