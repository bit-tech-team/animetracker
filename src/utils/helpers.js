const openUrl = (url) => {
  window.open(url);
};

const generarId = () => {
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36);

  return random + fecha;
};
const validURL = new RegExp("^(https?://.*.(?:png|jpg|jpeg))$");
const validFile = new RegExp("^.*.(jpg|jpeg|png)$");

const formatDate = (date) => {
  let a = [];
  let dateToString;

  Object.entries(date).forEach(([key, value]) => {
    a.push(value);
  });

  dateToString = a.toString().replace(",", "-").replace(",", "-");
  return dateToString
};

module.exports = {
  openUrl,
  generarId,
  validURL,
  validFile,
  formatDate,
};
