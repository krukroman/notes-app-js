import { refs } from '../utils';
import onEditBtn from '../actions/onEditBtn';
import onArchiveBtn from '../actions/onArchiveBtn';
import onDeleteBtn from '../actions/onDeleteBtn';
import { getActiveNotes } from '../utils';
import NoteLIst from '../components/NotesList';
import NotFound from '../components/NotFound';

const addEventListeners = () => {
  const editBtns = refs.editBtns();
  const archiveBtns = refs.archiveBtns();
  const deleteBtns = refs.deleteBtns();

  editBtns.forEach(btn => {
    btn.addEventListener('click', onEditBtn);
  });

  archiveBtns.forEach(btn => {
    btn.addEventListener('click', onArchiveBtn);
  });

  deleteBtns.forEach(btn => {
    btn.addEventListener('click', onDeleteBtn);
  });
};

const renderActiveNotes = () => {
  const notesWrapper = refs.notesContainer();
  const notes = getActiveNotes();
  notesWrapper.textContent = '';
  notesWrapper.insertAdjacentHTML(
    'beforeend',
    notes.length >= 1 ? NoteLIst(notes) : NotFound()
  );
  notes.length >= 1 && addEventListeners();
};

export default renderActiveNotes;
