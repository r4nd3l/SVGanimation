var btns = document.querySelectorAll(".buttons button");
var speedometer = document.getElementsByClassName("speedometer")[0];

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", speedometerClasses);
}

function speedometerClasses(){
  if (this.getAttribute("data-add")) {
    speedometer.classList.add(this.getAttribute("data-add"));
  }
  if (this.getAttribute("data-remove")) {
    speedometer.classList.remove(this.getAttribute("data-remove"));
  }
}
