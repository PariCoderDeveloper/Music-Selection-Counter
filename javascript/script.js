function countSelected(selectObject) {
    let numberOfSelected = 0;
    for (let index = 0; index < selectObject.options.length; index++) {
        if (selectObject.options[index].selected) {
            numberOfSelected += 1;
        }        
    }
    return numberOfSelected;
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
    console.log("A click on ", event.target);
    const selectObject = document.selectForm?.musictypes;
    document.querySelector(".result").innerText = countSelected(selectObject); 
});