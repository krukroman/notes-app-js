const Modal = children => {
  return `<div class="backdrop">
        <div class="modal">
          ${children}
        </div>
      </div>`;
};

export default Modal;
