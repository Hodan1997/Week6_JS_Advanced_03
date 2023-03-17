const siteContent = {
    "nav": {
      "nav-item-1": "Services",
      "nav-item-2": "Product",
      "nav-item-3": "Vision",
      "nav-item-4": "Features",
      "nav-item-5": "About",
      "nav-item-6": "Contact",
      "img-src": "img/logo.png"
    },
    "cta": {
      "h1": "DOM Is Awesome",
      "button": "Get Started",
      "img-src": "img/header-img.png"
    },
    "main-content": {
      "features-h4":"Features",
      "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "about-h4":"About",
      "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
      "services-h4":"Services",
      "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "product-h4":"Product",
      "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "vision-h4":"Vision",
      "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
      "contact-h4" : "Contact",
      "address" : "123 Way 456 Street Somewhere, USA",
      "phone" : "1 (888) 888-8888",
      "email" : "sales@greatidea.io",
    },
    "footer": {
      "copyright" : "Copyright Great Idea! 2018"
    },
  };
  

  
  // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent= "Services"

const navtwo = document.querySelectorAll('nav a');
navtwo[1].textContent= "Product"

let nav3 = document.querySelectorAll('nav a');
nav3[2].textContent= "Vision"

let nav4= document.querySelectorAll('nav a');
nav4[3].textContent= "Features"

let nav5= document.querySelectorAll('nav a');
nav5[4].textContent= "About"

let nav6 = document.querySelectorAll('nav a');
nav6[5].textContent= "Contact"


const div = document.getElementsByTagName('div')
div.textContent = "DOM Is Awesome"
 console.log(div)

 //let tca = document.querySelectorAll('cta h1');
 //tca[1].textContent= "Dom Is Awesome" Tried this way 2

const button1 = document.getElementsByTagName('button')
button1.textContent= "Get Started"


let cta = document.getElementById("cta-img");
cta.setAttribute('src', "img/header-img.png");

const menu =document.querySelectorAll('h4')
menu[0].textContent= "Features"

const featurescontent= document.querySelectorAll('p')
featurescontent[0].textContent="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
//console.log(featurescontent)

const abouth4 = document.querySelectorAll('h4')
abouth4[1].textContent= "About"


const aboutcontent= document.querySelectorAll('p')
aboutcontent[1].textContent= "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let middleimg= document.getElementById('middle-img');
middleimg.setAttribute('src', 'img/mid-page-accent.jpg')

const servicesh4= document.querySelectorAll('h4')
servicesh4[2].textContent= "Services"

const Servicescontent = document.querySelectorAll('p')
Servicescontent[2].textContent= "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
    //console.log(Servicescontent)


    const producth4= document.querySelectorAll('h4');
    producth4[3].textContent="Product"

    const productcontent= document.querySelectorAll('p');
    productcontent[3].textContent= "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
      

    const visionh4= document.querySelectorAll('h4');
    visionh4[4].textContent="Vision"

    const visioncontent= document.querySelectorAll('p');
    visioncontent[4].textContent= "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
    

    let contacth4= document.querySelectorAll('h4');
    contacth4[5].textContent= "Contact"

    let address= document.querySelectorAll('p');
    address[5].textContent= "123 Way 456 Street Somewhere, USA"


  let phone= document.querySelectorAll('p');
  phone[6].textContent= "1 (888) 888-8888"

  let email= document.querySelectorAll('p');
  email[7].textContent= "sales@greatidea.io"

  let copyright= document.querySelectorAll('p');
  copyright[8].textContent= "Copyright Great Idea! 2018"

