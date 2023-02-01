function addTask(){
    let item = document.getElementById('box');
    let list_item = document.getElementById('l-item');
    if(item.value != ""){
        let make_li = document.createElement("li");
        make_li.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_li);
        item.value="";

        make_li.ondblclick=function(){
            this.parentNode.removeChild(this);
        }
    }
    else{
        alert("Please enter the task in the textbox")
    }
}

