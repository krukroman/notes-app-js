import { NOTES } from '../utils';

const getNotes = () => {
  if (localStorage.hasOwnProperty('notes')) {
    const parsedNotes = JSON.parse(localStorage.getItem('notes'));
    return parsedNotes;
  }
  return NOTES;
};

export default getNotes;
