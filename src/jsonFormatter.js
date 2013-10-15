/*
 * Format JSON
 *
 * @author Fernando A. Damião <me@fadamiao.com>
 * @note Created At: 2013-09-05 08:43
 * @note Last Update: 2013-09-05 09:59
 * @return String Formated JSON
 *
 */
function jsonFormatter(json, option) {
  var json = JSON.parse(json);
  if (option == "compact") {
    if (typeof json === 'object') {
      json = JSON.stringify(json);
    }
  } else {
    if (option == "2" || option == "4") {
      option = parseInt(option);
    } else {
      option = '\t';
    }
    if (typeof json === 'object') {
      json = JSON.stringify(json, null, option);
    }
  }
  return json;
}
