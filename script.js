let presseWindow = document.getElementById("presse-modal"),
    impressumWindow = document.getElementById("impressum-modal"),
    loaderWindow = document.getElementById("TOGSloader"),
    headerLogo = document.getElementById("headerLogo");
    var scrollPercent = document.documentElement.scrollTop;




function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].classList.remove("selected");
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.classList.add("selected");
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

document.addEventListener("click", clickLogo);

function clickLogo(){
        document.getElementById("content").style.opacity = "1"
        headerLogo.classList.remove("big-logo")
        headerLogo.classList.add("small-logo")
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();