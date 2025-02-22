let mainPage = document.getElementById("mainPage");

let plusButton = document.getElementById("plusBtn");

plusButton.addEventListener("click", () => {
    modalDiv.style.display = "flex"
    document.body.style.backgroundColor = "lightgray"
    mainPage.style.opacity = "0.5";
});

let modalDiv = document.getElementById("modalDiv")

let todoFormHeader = document.createElement("div");
todoFormHeader.className = "todo-form-header";
modalDiv.appendChild(todoFormHeader) 

const cancelButton = document.createElement("button");
cancelButton.className = "cancel-btn";
cancelButton.textContent = "Cancel";

cancelButton.addEventListener("click", () => {
    modalDiv.style.display = "none"
    document.body.style.backgroundColor = ""
    mainPage.style.opacity = "1";
});

const addTaskButton = document.createElement("button");
addTaskButton.className = "add-btn";
addTaskButton.textContent = "Add";

todoFormHeader.append(cancelButton, addTaskButton);

const form = document.createElement("form");
form.className = "todo-form";
modalDiv.appendChild(form)

const title = document.createElement("h3");
title.textContent = "Title";

const titleInput = document.createElement("input");
titleInput.type = "text";
titleInput.className = "inputTask";
titleInput.placeholder = "add a title ...";

const description = document.createElement("h3");
description.textContent = "Description";

const descriptionInput = document.createElement("textarea");
descriptionInput.placeholder = "add a description ...";

const tags = document.createElement("h3");
tags.textContent = "Tags";

const tagsContainer = document.createElement("div");
tagsContainer.className = "todo-tags";

const workTag = document.createElement("div");
workTag.className = "work-tag";

const workInnerDiv = document.createElement("div");
workInnerDiv.textContent = "work";

const workSpan = document.createElement("span");
workSpan.className = "work";

workTag.appendChild(workInnerDiv)
workInnerDiv.appendChild(workSpan)


const studyTag = document.createElement("div");
studyTag.textContent = "study";

const studySpan = document.createElement("span");
studySpan.className = "study";

studyTag.appendChild(studySpan)


const entertainmentTag = document.createElement("div");
entertainmentTag.textContent = "entertainment";

const entertainmentSpan = document.createElement("span");
entertainmentSpan.className = "entertainment";

entertainmentTag.appendChild(entertainmentSpan)

const familyTag = document.createElement("div");
familyTag.textContent = "family";

const familySpan = document.createElement("span");
familySpan.className = "family";

familyTag.appendChild(familySpan)
tagsContainer.append(workTag , studyTag, entertainmentTag, familyTag);
form.append(title, titleInput, description, descriptionInput, tags, tagsContainer)

addTaskButton.addEventListener("click",() => {

    modalDiv.style.display = "none";
    document.body.style.backgroundColor = ""
    mainPage.style.opacity = "1";

    let taskContainer = document.getElementById("taskContainer");
    

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    let h3 = document.createElement("h3");
    h3.textContent = titleInput.value;

    let headingAndIcon = document.createElement("div")
    headingAndIcon.classList.add("h3-3dot-icon");
    
    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-ellipsis");

    headingAndIcon.append(h3, icon);
    taskDiv.appendChild(headingAndIcon)


    icon.addEventListener("click", () => {

        let menu = document.createElement("div");
        menu.classList.add("task-menu");

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit...";
        editBtn.classList.add("icon-editBtn");

        editBtn.addEventListener("click", () => {
        const newInput = document.createElement("input");
        newInput.type = "text"
        newInput.value = todoInput.value;
        newInput.appendChild(menu)
        });     
        

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("icon-deleteBtn");

        deleteBtn.addEventListener("click", () => {
            taskDiv.remove()
        });

        menu.appendChild(editBtn);
        menu.appendChild(deleteBtn);
        headingAndIcon.appendChild(menu);
});

let p = document.createElement("p");
        p.textContent = descriptionInput.value;
        taskDiv.appendChild(p)

        let tagsAndInput = document.createElement("div");
        tagsAndInput.classList.add("tags-input")
        taskDiv.appendChild(tagsAndInput)

        let tags = document.createElement("div");
        tags.classList.add("tags")
        tagsAndInput.appendChild(tags)


        let spanStudy = document.createElement("span");
        spanStudy.classList.add("study")

        let spanEntertainment = document.createElement("span");
        spanEntertainment.classList.add("entertainment")

        let spanWork = document.createElement("span");
        spanWork.classList.add("work")

        tags.append(spanStudy, spanEntertainment, spanWork)

        let label = document.createElement("label")
        tagsAndInput.appendChild(label)

        let inputCheckbox = document.createElement("input");
        inputCheckbox.type = "Checkbox";

        let h4 = document.createElement("h4");
        h4.textContent = "Done";

        label.append(inputCheckbox, h4)

    taskContainer.appendChild(taskDiv);
});
