/*Bright Mode*/
const mode = document.querySelector("header .mode");
const icon = document.querySelector(".fa-sun");

mode.addEventListener("click", function() { 
    document.body.classList.toggle("bright-mode");

    if (document.body.classList.contains("bright-mode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
    else { 
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");        
    }
})

/*Navbar-collapse*/
const navbarBtn = document.querySelector(".navbar-collapse");
const navbar = document.querySelector(".navbar");

navbarBtn.addEventListener("click", () => { 
    if (navbar.classList.contains("navbar-slide")) { 
        navbar.classList.remove("navbar-slide");
        navbarBtn.classList.remove("fa-xmark");
        navbarBtn.classList.add("fa-bars");
    }
    else{ 
        navbar.classList.add("navbar-slide");
        navbarBtn.classList.remove("fa-bars");
        navbarBtn.classList.add("fa-xmark");
    }


})


