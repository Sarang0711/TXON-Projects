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

var toggler = document.querySelector(".theme-toggler");
//  console.log(toggler.classList);
var calci = document.querySelector(".calci");
var btn = document.querySelectorAll(".btn");
var operator = document.querySelectorAll(".operator");
var equal = document.querySelector(".equal");

toggler.addEventListener("click", changeTheme);

function changeTheme() {
    toggler.classList.toggle("fa-toggle-off");
    toggler.classList.toggle("fa-toggle-on");
    calci.classList.toggle("darkTheme");
    // console.log(toggler.classList);
    // console.log(btn.classList);

    btn.forEach((btn)=> {
        btn.classList.toggle("darkTheme");
    });
    
    operator.forEach((operator)=> {
        operator.style.color = "#ea822d";
    });

    equal.style.backgroundColor = "#ea822d";

}