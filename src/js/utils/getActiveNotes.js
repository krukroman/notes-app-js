import { getNotes } from '../api';

const getActiveNotes = () => getNotes().filter(note => !note.archived);

export default getActiveNotes;
