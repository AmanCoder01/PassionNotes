const addButton=document.getElementById('add');

const updateLocalsto=()=>{
   const textareaData=document.querySelectorAll('textarea');
   const notes=[];

   textareaData.forEach((note)=>{
    return notes.push(note.value);
   })

   localStorage.setItem('notes',JSON.stringify(notes));
}


const addnewNote=(text='')=>{
   const note=document.createElement('div');
   note.classList.add('note');

   const htmlData=`
   <div class="tools">
   <button class="edit"><i class="fa-regular fa-pen-to-square"></i></button>
   <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
</div>
<div class="main ${text?" ":"hidden"}"></div>

<textarea class="${text?"hidden":" "}"></textarea>`;


note.insertAdjacentHTML('afterbegin', htmlData);


const editButton=note.querySelector('.edit');
const delButton=note.querySelector('.delete');
const main=note.querySelector('.main');
const textarea=note.querySelector('textarea');

// dleting the node

delButton.addEventListener('click',()=>{
    note.remove();
    updateLocalsto();
})


// edit the note

textarea.value=text;
main.innerHTML=text;

editButton.addEventListener('click',()=>{
    main.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
})

textarea.addEventListener('change', (event) =>{
    const value=event.target.value;
    main.innerHTML=value;

    updateLocalsto();
})




document.body.appendChild(note);

}



const notes=JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note)=>addnewNote(note))
}

addButton.addEventListener('click' ,() => addnewNote());





