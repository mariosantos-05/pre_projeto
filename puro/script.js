const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



inputBox.addEventListener("keypress", function(event) {
  if(event.key === "Enter"){
    //event.preventDefault();
    document.getElementById("myBtn").click();
  }

});


function addTask(){
    if(inputBox.value === ''){
        alert("Você deve digitar algo!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


function darkmode(){
    var element = document.getElementById("normal-mode");
    element.classList.toggle("dark-mode");
    localStorage.setItem("data", listContainer.innerHTML);
}