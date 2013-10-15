/*
 * Download JSON via Blob
 *
 * @author Fernando A. Damião <me@fadamiao.com>
 * @note Created At: 2013-08-12 08:55
 * @note Last Update: 2013-09-05 10:00
 * @return String Download URL via Blob
 *
 */
function jsonDownload(json, option) {
  window.URL = window.URL || window.webkitURL;
  var json = jsonFormatter(json, option);
  var blob = new Blob([json], {type: 'application/octet-stream'});
  return window.URL.createObjectURL(blob);
}
