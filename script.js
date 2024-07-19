let inputBox = document.getElementById("input-box");
let listcontainer = document.getElementById("list-container");

function Add(){
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = `${inputBox.value} <i class="fa-solid fa-trash"></i>`;
        listcontainer.appendChild(li);
        inputBox.value = "";
        li.querySelector("i").addEventListener("click", remove);
        function remove(){
            li.remove()
        }
    }

}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "I"){
        e.target.parentElement.remove();
    }
}, false);
