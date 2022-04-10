const rg =
  /((0?[1-9]|1[012])[- \/.](0?[1-9]|[12][0-9]|3[01])[- \/.](19|20)?[0-9]{2})/gm;

const parseDateFromText = string => {
  return string.match(rg) ? string.match(rg).join(', ').replace(/-/g, '/') : '';
};

export default parseDateFromText;
