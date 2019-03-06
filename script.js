const grid = document.querySelector(".grid");

const createClear = document.querySelector("#create");
createClear.addEventListener("click", create_Clear);

function createDivs(size){
    for(i = 1; i < size * size + 1; i++){
        let createdDivs = document.createElement("div")
        grid.appendChild(createdDivs)
        createdDivs.setAttribute("data-pos", i)
        createdDivs.setAttribute("class", "grid-element" )
    }
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    updateColor();
}

function updateColor(){
    let divs = document.querySelectorAll(".grid-element")
    divs.forEach(function(div){
        div.addEventListener("mouseover", updateClass);
    });
    function updateClass(){
        this.classList.add("black")
    }
}
function create_Clear(){
    reset();
    const userInput = document.querySelector("#userInput");
    const input = userInput.value;
    let size = parseInt(input);
    createDivs(size);
}
createDivs(16);
updateColor();

function reset(){
    let divs = document.querySelectorAll(".grid-element")
    divs.forEach(function(div){
        div.classList.remove("black");
        div.parentNode.removeChild(div);
        return false;
    });
    createDivs(16);
}


const userInput = document.querySelector("#userInput");
userInput.addEventListener("input", function(e){
    const sizeDisplay = document.querySelector("#sizeDisplay")
    sizeDisplay.textContent = `${userInput.value}x${userInput.value}`;
})