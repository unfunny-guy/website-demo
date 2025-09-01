// JavaScript source code

const form = document.getElementById('noteForm');
const note = document.getElementById('note');
const date = document.getElementById('date');
const noteList = document.getElementById('list')

form.addEventListener('submit', (event) => {
    const newNote = document.createElement('ul');
    newNote.textContent = note.value;
    newList.append(newNote);
    const newDate = document.createElement('ul');
    newDate.textContent = date.value;
    newList.append(date);
});