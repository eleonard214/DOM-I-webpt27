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
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Selecting the anchor tags in nav
const nav1 = document.querySelector('nav a')
const nav2 = nav1.nextElementSibling
const nav3 = nav2.nextElementSibling
const nav4 = nav3.nextElementSibling
const nav5 = nav4.nextElementSibling
const nav6 = nav5.nextElementSibling

// inserting text for the anchor tags from above
nav1.textContent='Services'
nav2.textContent='Product'
nav3.textContent='Vision'
nav4.textContent='Features'
nav5.textContent='About'
nav6.textContent='Contact'

// Used to check
// console.log(nav1)
// console.log(nav2)
// console.log(nav3)
// console.log(nav4)
// console.log(nav5)
// console.log(nav6)

// select h1, then create two more h1s 
const firstH1=document.querySelector('h1')
const secH1=document.createElement('h1')
const thirdH1=document.createElement('h1')

// add text to h1s above
firstH1.textContent='DOM'
secH1.textContent='Is'
thirdH1.textContent='Awesome'

// adding new h1s to the original h1
firstH1.appendChild(secH1)
firstH1.appendChild(thirdH1)

// checking h1s
// console.log(firstH1)
// console.log(secH1)
// console.log(thirdH1)

// selecting the button and add text 
const button1=document.querySelector('button').textContent='Get Started'

// select image and add source
const headerImg=document.querySelector('#cta-img').src="img/header-img.png"
headerImg.alt="Image of a code snippet."

// checking
// console.log(headerImg)

// selecting all h4s and adding text
const allH4 = document.querySelectorAll('h4')
console.log(allH4)
allH4[0].textContent='Features'
allH4[1].textContent='About'
allH4[2].textContent='Services'
allH4[3].textContent='Product'
allH4[4].textContent='Vision'
allH4[5].textContent='Contact'

// checking
// console.log(allH4[2])

// selecting all ps and adding text
// THIS was so much easier, should have done the rest this way!!!!
const allP =document.querySelectorAll('p') 
console.log(allP)
allP[0].textContent=siteContent["main-content"]["features-content"]
allP[1].textContent=siteContent["main-content"]["about-content"]
allP[2].textContent=siteContent["main-content"]["services-content"]
allP[3].textContent=siteContent["main-content"]["product-content"]
allP[4].textContent=siteContent["main-content"]["vision-content"]
allP[5].textContent=siteContent.contact.address
allP[6].textContent=siteContent.contact.phone
allP[7].textContent=siteContent.contact.email
allP[8].textContent=siteContent.footer.copyright

// checking
console.log(allP[5])

// select the middle image and give it a source
const midImg = document.querySelector('.middle-img').src="img/mid-page-accent.jpg"

//  change color to green
nav1.style.color="green"
nav2.style.color="green"
nav3.style.color="green"
nav4.style.color="green"
nav5.style.color="green"
nav6.style.color="green"

// prepend and append to nav bar
const newNav1=document.createElement('a')
newNav1.textContent="New"
const newNav2=document.createElement('a')
newNav2.textContent="Navs"
const navBar=document.querySelector('nav')
navBar.appendChild(newNav2)
navBar.prepend(newNav1)