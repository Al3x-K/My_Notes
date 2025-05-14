const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel'); 
const deleteBtns = document.getElementsByClassName('.delete-note');
const deleteAllBtn = document.querySelector('.delete-all');

const noteArea = document.querySelector('.note-area');
const panel = document.querySelector('.note-panel');

const category = document.querySelector('#category');
const textArea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;
let cardID = 0;

const openPanel = () => 
{
    panel.style.display = 'flex';
}

const closePanel = () =>
{
    panel.style.display = 'none';
    error.style.visibility = 'hidden';
    textArea.value = '';
    category.selectedIndex = 0;
}

const addNote = () =>
{
    if(textArea.value === '' || category.options[category.selectedIndex].value === '0')
    {
        error.style.visibility = 'visible';
        return;
    }
    else
    {
        error.style.visibility = 'hidden';
        createNote();
    }
}

const createNote = () =>
{
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardID);
    

    newNote.innerHTML = `
    <div class="note-header">
                <h3 class="note-title">${selectedValue}</h3>
                <button class="delete-note"><i class="fas fa-times icon"></i></button>
            </div>
            <div class="note-body">
                ${textArea.value}            
            </div>
        </div>
    `;

    noteArea.appendChild(newNote);
    cardID++;
    textArea.value = '';
    category.selectedIndex = 0;
    panel.style.display = 'none';
}
    
const selectValue = () =>
{
    selectedValue = category.options[category.selectedIndex].text;
}

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);