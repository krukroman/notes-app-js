const ItemContent = renderData => {
  return Object.values(renderData)
    .map(value => `<div class="col">${value}</div>`)
    .join('');
};

export default ItemContent;
