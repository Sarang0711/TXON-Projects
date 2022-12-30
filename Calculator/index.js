function display(val){
    document.getElementById("screen").value += val;
}

function allClr(){
    document.getElementById("screen").value = " ";
}

function clr() {
    var input = document.getElementById("screen");
    input.value = input.value.substring(0, input.value.length -1);
}

function equate(){
    let temp = document.getElementById("screen").value;
    let result = eval(temp);
    document.getElementById("screen").value = result;
}

// var toggler = document.querySelector(".theme-toggler");
// var btn = document.querySelectorAll(".btn");
//  console.log(toggler.classList);
// toggler.addEventListener("click", changeTheme);

// function changeTheme() {
//     toggler.classList.toggle("fa-toggle-off");
//     toggler.classList.toggle("fa-toggle-on");
//     toggler.classList.toggle("darkTheme");
//     console.log(toggler.classList);
// }