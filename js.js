const sections = document.querySelectorAll("section");

for (let section of sections) {
  const h2 = section.querySelector("h2");
  const ul = section.querySelector("ul");

  h2.addEventListener("click", function() {
    if (ul.style.display === "none") {
      ul.style.display = "block";
      ul.style.height = "auto";
      const height = ul.offsetHeight;
      ul.style.height = "0";
      setTimeout(function() {
        ul.style.height = height + "px";
      }, 0);
    } else {
      ul.style.height = ul.offsetHeight + "px";
      setTimeout(function() {
        ul.style.height = "0";
        setTimeout(function() {
          ul.style.display = "none";
        }, 500);
      }, 0);
    }
  });
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
