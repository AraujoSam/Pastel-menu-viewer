function openNav() {
  document.getElementById("mySidenav").style.width = "290px";
  document.getElementById("main").style.marginRight = "290px";
}

function closeNav() {

  const currentPage = window.location.pathname;

  if (currentPage.includes("/cart/index.html")) {
    window.location.href = "../main/index.html";
    return; // stop here to avoid continuing
  }

  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}

