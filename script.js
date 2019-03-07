const grid = document.querySelector(".grid");
const clear = document.querySelector("#clear");
clear.addEventListener("click", reset);
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
        this.classList.remove(oldClassName)
        this.classList.add(className)
    }
}
//RealTime Reset
function resetRT(size){
    let divs = document.querySelectorAll(".grid-element")
    divs.forEach(function(div){
        div.classList.remove(className);
        div.parentNode.removeChild(div);
        return false;
    });
    createDivs(size);
}
let newSize = [0]
let oldSize = [0]
function reset(){
    let divs = document.querySelectorAll(".grid-element")
    divs.forEach(function(div){
        div.classList.remove(className);
        div.parentNode.removeChild(div);
        return false;
    });
    createDivs(newSize);
}
// real time update of the grid size and grid creation
const userInput = document.querySelector("#userInput");
userInput.addEventListener("input", function(e){
    resetRT();
    const sizeDisplay = document.querySelector("#sizeDisplay")
    sizeDisplay.textContent = `${userInput.value}x${userInput.value}`;
    let size = parseInt(userInput.value);
    newSize.unshift(size);
    oldSize = newSize.pop();
    createDivs(size);
    return oldSize;
})
createDivs(16);
updateColor();
const li = document.querySelectorAll("ul li")
li.forEach(function(e){
    e.addEventListener("click", fetchClassName)  
})
let className = ["black"]
let oldClassName = ["black"]
function fetchClassName(e){
    className.unshift(e.srcElement.className);
    oldClassName = className.pop();
    return;
}
/* For debugging remove
function debug(){
    console.log("deubg new: "+ newSize)
    console.log("debug :" + oldSize)
}
*/