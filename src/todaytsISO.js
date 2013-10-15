/*
 * Grab the actual timestamp in ISO 8601 format
 *
 * @author Fernando A. Damião <me@fadamiao.com>
 * @note Created At: 2013-08-11 22:40
 * @note Last Update: 2013-08-18 20:00
 * @return String Timestamp in YYYY-MM-DD HH:MM:SS
 *
 */
function todaytsISO() {
  var d = new Date();
  return d.getFullYear() + '-' + formatInt(d.getMonth() + 1, 2) + '-' + formatInt(d.getDate(), 2) + ' ' + formatInt(d.getHours(), 2) + ':' + formatInt(d.getMinutes(), 2) + ':' + formatInt(d.getSeconds(), 2);
}
