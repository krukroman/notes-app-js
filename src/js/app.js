import { addNote } from './api';
import renderActiveNotes from './services/renderActiveNotes';
import renderSummaryList from './services/renderSummary';
import { notesStatistics } from './utils';

const createBtn = document.querySelector('.create__btn');

createBtn.addEventListener('click', onCreateBtn);

renderActiveNotes();
renderSummaryList();

function onCreateBtn() {
  const newNote = {
    id: '1',
    title: 'title',
    archived: true,
    category: 'Task'
  };
  addNote(newNote);
  renderActiveNotes();
  renderSummaryList();
}
