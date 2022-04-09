// TODO окрема функція для показу архівних нотаток
// TODO розмітка модального вікна з формою для додавання та редагування нотаток
// TODO прописати функції на конпки редагування, видалення та рхівування нотаток
// TODO в апі додати можливість видалення всіх нотаток зразу

import { addNote } from './api';
import renderActiveNotes from './services/renderActiveNotes';
// import renderArchivedNotes from './services/renderArchivedNotes';
import renderSummaryList from './services/renderSummary';

// const createBtn = document.querySelector('.create__btn');
// const showArchivedNotesBtn = document.querySelector('.archived');

// createBtn.addEventListener('click', onCreateBtn);
// showArchivedNotesBtn.addEventListener('click', onArchivedBtn);

renderActiveNotes();
renderSummaryList();

// function onCreateBtn() {
//   const newNote = {
//     id: '1',
//     title: 'title',
//     archived: false,
//     category: 'Task'
//   };
//   addNote(newNote);
//   renderActiveNotes();
//   renderSummaryList();
// }

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
