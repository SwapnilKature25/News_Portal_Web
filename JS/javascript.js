function openMenu() {
  var x = document.getElementById("navBar");
  var y = document.getElementById("menubtn");

  if (x.className === "topNav") {
    x.className += " overlay";
    y.className = "fas fa-times";
  } else {
    x.className = "topNav";
    y.className = "fas fa-bars";
  }
}


