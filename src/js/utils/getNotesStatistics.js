import { getNotes } from '../api';

const groupByCategory = () => {
  return getNotes().reduce((acc, note) => {
    acc[note.category] = acc[note.category] || [];
    acc[note.category].push(note);
    return acc;
  }, {});
};

const getNotesStatistics = () => {
  const notesByCategory = groupByCategory();
  let result = [];

  for (const category in notesByCategory) {
    if (Object.hasOwnProperty.call(notesByCategory, category)) {
      const element = notesByCategory[category];
      const activeNotes = element.filter(note => !note.archived);
      const archivedNotes = element.filter(note => note.archived);
      result.push({
        category,
        active: activeNotes.length,
        archived: archivedNotes.length
      });
    }
  }

  return result;
};

export default getNotesStatistics;
