//window.addEventListener("scroll", function () {
    //var navbar = document.getElementById("navbar");
   // var navIcon = document.getElementById("nav-icon");
   // var scrollPosition = window.scrollY;

   // if (scrollPosition > 100) {
   //     navbar.classList.add("scrolled");
   //     navIcon.classList.add("scrolled");
   // } else {
   //     navbar.classList.remove("scrolled");
   //     navIcon.classList.remove("scrolled");
  //  }
//  });

// document.getElementById("nav-icon").addEventListener("click", function () {
   // var navbar = document.getElementById("navbar");
  //  navbar.classList.toggle("active"); 
// });


// document.querySelectorAll("nav.active ul li a").forEach(function (link) {
//   link.addEventListener("click", function () {
   //     var navbar = document.getElementById("navbar");
   //     navbar.classList.remove("active"); 
  //  });
// });

// window.addEventListener("hashchange", function () {
  //  var navbar = document.getElementById("navbar");
  //  navbar.classList.remove("active"); 
//  });




window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var navIcon = document.getElementById("nav-icon");
    var scrollPosition = window.scrollY;

    var aboutSection = document.getElementById("about");
    var aboutSectionBottom = aboutSection.offsetTop + aboutSection.offsetHeight;

    // Show/hide nav based on scroll position
    if (scrollPosition > aboutSectionBottom) {
        // Show the hamburger icon and hide the navbar
        navbar.classList.add("scrolled");
        navIcon.classList.add("scrolled");
    } else {
        // Hide the hamburger icon and show the navbar
        navbar.classList.remove("scrolled");
        navIcon.classList.remove("scrolled");
    }
});

document.getElementById("nav-icon").addEventListener("click", function () {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
});

// Automatically close the navigation menu when changing the hash
window.addEventListener("hashchange", function () {
    var navbar = document.getElementById("navbar");
    navbar.classList.remove("active");
});
