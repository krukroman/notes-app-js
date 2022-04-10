const refs = {
  appContainer: () => document.getElementById('app'),
  notesContainer: () => document.querySelector('.notes__content'),
  summaryContainer: () => document.querySelector('.summary__content'),
  portalContainer: () => document.getElementById('portal'),
  createNoteBtn: () => document.querySelector('.create__btn'),
  showArchivedBtn: () => document.querySelector('.archived'),
  editBtns: () => document.querySelectorAll('.edit'),
  archiveBtns: () => document.querySelectorAll('.archive'),
  deleteBtns: () => document.querySelectorAll('.delete'),
  editForm: () => document.getElementById('form'),
  closeFormBtn: () => document.querySelector('.form__close__btn')
};

export default refs;
