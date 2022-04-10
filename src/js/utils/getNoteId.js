const getNoteId = e => {
  return e.target.parentElement.parentElement.parentElement.id;
};

export default getNoteId;
