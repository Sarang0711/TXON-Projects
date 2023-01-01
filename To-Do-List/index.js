
function addToList(){
    let pt1 = document.getElementById("pt1");
    let pt2 = document.getElementById("pt2");
    let ft = document.getElementById("task");
    let pty1 = document.getElementById("imp-urg");
    let pty = document.getElementsByName("priority");
    // console.log(ft.value);
    // console.log(pty[0].input.value);
    pt1.innerHTML = ft.value;
    pt2.innerHTML = pty.value;
}