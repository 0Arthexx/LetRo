function openNav() {
  document.getElementById("mySidenav1").style.width = "250px";
  document.getElementById("main1").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav1").style.width = "0";
  document.getElementById("main1").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}