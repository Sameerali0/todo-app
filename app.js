const todoInput = document.getElementById("todoInput");
const todoButton = document.getElementById("todoButton");

todoButton.addEventListener("click", todoButtonHandler);

function todoButtonHandler(event) {
    event.preventDefault() 
    const inputValue = todoInput.value;
    const container = document.createElement("div");
    container.id = "container"
    console.log(container);
    
    const h1 = document.createElement("h1");
    h1.style.display = ("inline");
    h1.id = "js-h1"
    h1.textContent = inputValue;

    const editButton = document.createElement("button");
    editButton.textContent = "edit"

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete"
    
    container.append(h1, editButton, deleteButton);
    document.body.appendChild(container);

    editButton.addEventListener("click", editButtonHandler);
    function editButtonHandler(event) {
        const newInput = document.createElement("input");
        newInput.type = "text"
        newInput.value = inputValue;

        container.replaceChild(newInput, h1);
        
        const updateButton = document.createElement("button");
        updateButton.textContent = "update"

        editButton.replaceWith(updateButton)
        deleteButton.replaceWith(updateButton)

        updateButton.addEventListener("click", updateButtonHandler)
        function updateButtonHandler(event) {
             let secondInput = newInput.value;
             h1.textContent = secondInput;

             newInput.replaceWith(h1);
             updateButton.replaceWith(editButton);
             container.appendChild(deleteButton);

             inputValue.value;    
        }        
    }
    deleteButton.addEventListener("click", deleteButtonHandler);
    function deleteButtonHandler(del) {
        container.remove(editButton)   
    }
}
