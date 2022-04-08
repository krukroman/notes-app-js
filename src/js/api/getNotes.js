const getNotes = () => {
  if (localStorage.hasOwnProperty('notes')) {
    return JSON.parse(localStorage.getItem('notes'));
  }
  return [];
};

export default getNotes;
