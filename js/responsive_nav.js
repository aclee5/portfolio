function responsiveNav() {
    var x = document.getElementById("page-links");
    if (x.className === "page-buttons") {
      x.className += " responsive";
    } else {
      x.className = "page-buttons";
    }
  }