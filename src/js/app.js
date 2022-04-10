// TODO окрема функція для показу архівних нотаток
// TODO розмітка модального вікна з формою для додавання та редагування нотаток
// TODO прописати функції на конпки редагування, видалення та рхівування нотаток
// TODO в апі додати можливість видалення всіх нотаток зразу

// import renderMainLayout from './renderFunctions/renderMainLayout';
// import renderActiveNotes from './renderFunctions/renderActiveNotes';
// import renderArchivedNotes from './renderFunctions/renderArchivedNotes';
// import renderSummary from './renderFunctions/renderSummary';
// import renderEditor from './renderFunctions/remderEditor';
// import { getById, handleArchive, deleteNote } from './api';

// renderMainLayout();
// renderActiveNotes();
// renderSummary();

// const createBtn = document.querySelector('.create__btn');
// const editBtns = document.querySelectorAll('.edit');
// const archiveBtns = document.querySelectorAll('.archive');
// const deleteBtns = document.querySelectorAll('.delete');

// createBtn.addEventListener('click', renderEditor);

// editBtns.forEach(btn =>
//   btn.addEventListener('click', e => {
//     const { target } = e;
//     const id = target.parentElement.parentElement.parentElement.id;
//     const note = getById(id);
//     renderEditor(note);
//   })
// );

// archiveBtns.forEach(btn => {
//   btn.addEventListener('click', e => {
//     const { target } = e;
//     const id = target.parentElement.parentElement.parentElement.id;
//     handleArchive(id);
//     renderActiveNotes();
//     renderSummary();
//   });
// });

// deleteBtns.forEach(btn => {
//   btn.addEventListener('click', e => {
//     const { target } = e;
//     const id = target.parentElement.parentElement.parentElement.id;
//     deleteNote(id);
//     renderActiveNotes();
//     renderSummary();
//   });
// });

// const showArchivedNotesBtn = document.querySelector('.archived');

// showArchivedNotesBtn.addEventListener('click', onArchivedBtn);

// let showArchived = false;

// function onArchivedBtn() {
//   const toggleShowArchived = () => {
//     showArchived = !showArchived;
//     return showArchived;
//   };
//   toggleShowArchived();

//   if (showArchived) {
//     renderArchivedNotes();
//     createBtn.style = 'display: none';
//   } else {
//     renderActiveNotes();
//     createBtn.style = 'display: block';
//   }
// }
