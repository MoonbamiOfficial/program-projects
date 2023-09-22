
let notes = document.querySelectorAll('.input');
const notesContainer = document.querySelector('.notes-container')
const createBtn = document.querySelector('.js-create-notes-btn')
    .addEventListener('click', () => {
        let newNotesInput = document.createElement("p");
        let newDeleteImg = document.createElement("img");
        newNotesInput.className = "input";
        newNotesInput.setAttribute("contenteditable", "true");
        newDeleteImg.src = "assets/bin.png";
        notesContainer.appendChild(newNotesInput).appendChild(newDeleteImg);
    });
    notesContainer.addEventListener('click', function(key) {
        if(key.target.tagName === "IMG") key.target.parentElement.remove();
    });