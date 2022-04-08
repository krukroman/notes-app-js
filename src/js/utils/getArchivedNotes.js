import { getNotes } from '../api';

const getArchivedNotes = () => getNotes().filter(note => note.archived);

export default getArchivedNotes;
