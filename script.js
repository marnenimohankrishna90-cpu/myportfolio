const links=document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(x=>x.classList.remove("active"));

link.classList.add("active");

});

});

window.addEventListener("load",()=>{

alert("Welcome to Mohan Krishna Portfolio");

});