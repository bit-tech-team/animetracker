const openUrl = (url) => {
  window.open(url);
};

const generarId = () => {
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36);

  return random + fecha;
};
const validURL = new RegExp("(https?://.*.(?:png|jpg|jpeg))");
const validFile = new RegExp("^.*.(jpg|jpeg|png)$");

const millisToMinutesAndSeconds = (millis) => {
  /* var minutes = Math.floor(millis / 60000); */
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return /* minutes + ":" +  */(seconds < 10 ? "0" : "") + seconds;
};

module.exports = {
  openUrl,
  generarId,
  validURL,
  validFile,
  millisToMinutesAndSeconds,
};
