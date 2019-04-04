let presseWindow = document.getElementById("presse"),
    impressumWindow = document.getElementById("impressum"),
    loaderWindow = document.getElementById("TOGSloader"),
    headerLogo = document.getElementById("header-squaring");
    var scrollPercent = document.documentElement.scrollTop;

function openPage(pageName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("selected");
    tablinks[i].classList.remove("unselected");
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.classList.add("selected");
 for (i = 0; i < tablinks.length; i++)
 {  
    if (tablinks[i].classList.contains("selected")) {//do nothing
    } 
    else {
      tablinks[i].classList.add("unselected")
    };
}
}
function openImpressum(){
    impressumWindow.style.display = "block"
}
function openPresse(){
    presseWindow.style.display = "block"
}
function closeWindow(){
    impressumWindow.style.display = "none"
    presseWindow.style.display = "none"
}
headerLogo.addEventListener("click", clickLogo);

function clickLogo(){
        document.getElementById("content").style.display = "flex"
        document.getElementById("footer").style.display = "flex"
        headerLogo.classList.remove("big-logo")
        headerLogo.classList.add("small-logo")
        setTimeout(document.getElementById("content").classList.add("opacity-on"), 1000);
}

//document.getElementById("defaultOpen").click