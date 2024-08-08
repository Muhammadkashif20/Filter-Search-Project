// Search-Filter Project Js:-

let allBoxes = document.querySelectorAll(".Box");
document.getElementById("serach-Inp").addEventListener("keyup", () => {
  let input = document.getElementById("serach-Inp").value.toLowerCase();
  for (var i = 0; i < allBoxes.length; i++) {
    let startFilter = allBoxes[i].getElementsByTagName("span")[0];
    if (startFilter && startFilter.textContent.toLowerCase().indexOf(input)!==-1) {
      allBoxes[i].style.display = "block";
    } else {
      allBoxes[i].style.display = "none";
    }
  }
});
