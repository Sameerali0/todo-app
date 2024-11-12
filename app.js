const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");

todoForm.addEventListener("submit",(e) => {
  e.preventDefault();

  const todoValue = todoInput.value;

  const todoContainer = document.createElement("div");
  const updateBtn = document.createElement("button");
  updateBtn.textContent = "Update";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  const todoH1 = document.createElement("h1");
  todoH1.textContent = todoValue;
  todoH1.style.display = "Inline";


  updateBtn.addEventListener("click", (e) => {
    const updateInput = document.createElement("input");
    updateBtn.type = "text";
    updateInput.value = todoValue;

    todoContainer.replaceChild(updateInput, todoH1)
  })

  todoContainer.append(todoH1,updateBtn,deleteBtn);

  document.body.appendChild(todoContainer);
})