import { getActiveNotes } from '../utils';
import NoteLIst from '../components/NotesList';
import NotFound from '../components/NotFound';

const renderActiveNotes = () => {
  const activeNotesWrapper = document.querySelector('.notes__content');
  const notes = getActiveNotes();
  activeNotesWrapper.textContent = '';
  activeNotesWrapper.insertAdjacentHTML(
    'beforeend',
    notes.length >= 1
      ? NoteLIst(notes.filter(note => !note.archived))
      : NotFound()
  );
};

export default renderActiveNotes;
