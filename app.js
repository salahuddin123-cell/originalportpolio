document.getElementsByClassName("toggle-btn")[0].addEventListener("click",()=>{
    document.getElementsByClassName("bar")[0].classList.toggle("active")
})
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function ChangeHeaderColor(){
    colorInput=getRandomColor()
    document.getElementById("a").style.color=colorInput;
}
ChangeHeaderColor()
setInterval("ChangeHeaderColor()",2000)
