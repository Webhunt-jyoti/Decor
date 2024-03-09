const navlink = document.querySelectorAll('.nav-link');
const wp = window.location.pathname;
navlink.forEach(obj =>{
    const navpath = new URL(obj.href).pathname;

    if(wp === navpath){
        obj.classList.add("active");
    }
  
    
});