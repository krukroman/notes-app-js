import CategoriesOptions from '../CategoriesOptions';

const EditorForm = ({ name = '', category = '', content = '' }) => {
  return `<form id="form" action=''>
            <label for="name">Note name</label>
            <input id="name" name="name" type="text" value="${name}" required />
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
              required
            >${content}</textarea>
            <div class="form__button__group">
              <button type="button" class='form__close__btn'>Close</button>
              <button type="submit">Save</button>
            </div>            
          </form>`;
};

export default EditorForm;
