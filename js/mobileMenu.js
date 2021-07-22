let btn = document.getElementById("hmbg");
let menuBox = document.getElementById('mobile-menu'); 
console.log(btn)    
if(btn) {
    btn.addEventListener("click", () => {
        if(menuBox.style.display == "flex") { 
          menuBox.style.display = "none";
        }
        else {
          menuBox.style.display = "flex";
        }
    });    
}  
