import CategoriesOptions from '../CategoriesOptions';

const EditorForm = ({ name = '', category = '', content = '' }) => {
  return `<form id="form">
            <label for="name">Note name</label>
            <input id="name" name="name" type="text" value="${name}" />
            <label for="category">Category</label>
            <select name="category" id="category">
              <option
               value="${category ? category : 'default'}"
               selected>
               ${category ? category : 'Choose category'}
              </option>
              ${CategoriesOptions(category)}
            </select>
            <label for="content">Content</label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"              
            >${content}</textarea>
            <div class="form__button__group">
              <button type="button" class='form__close__btn'>Close</button>
              <button type="submit">Save</button>
            </div>
          </form>`;
};

export default EditorForm;
