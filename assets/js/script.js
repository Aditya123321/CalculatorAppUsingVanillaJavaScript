const button_grid_el = document.querySelector(".buttons-grid");
const input_el = document.querySelector("input");

function setOutput(display_text) {
    console.log(display_text);
    input_el.value=display_text;
}

button_grid_el.addEventListener("click", (e) => {
    let result;
    let hitButton = e.target.innerText;
    let display_input_text = input_el.value;
    const currentValue = input_el.value;
    if(e.target.innerText === "C") {
        setOutput("");
    } else if(hitButton === "=") {
        try {
            setOutput(eval(currentValue));
        } catch {
            setOutput("Invalid Expression Entered");
            input_el.classList.add("error");            
        }         
    } else if(hitButton.charCodeAt(0) == 8592) {   
        setOutput(display_input_text.slice(0,-1));        
    } else {
        input_el.value = currentValue+ e.target.innerText;
    }   
});


