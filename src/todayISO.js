/*
 * Grab the actual day in ISO 8601 format
 *
 * @author Fernando A. Damião <me@fadamiao.com>
 * @note Created At: 2013-07-03 09:45
 * @note Last Update: 2013-08-18 20:05
 * @return String Actual day in ISO 8601 format (YYYY-MM-DD)
 *
 */
function todayISO() {
  var d = new Date();
  return d.getFullYear() + '-' + formatInt(d.getMonth(), 2) + '-' + formatInt(d.getDate(), 2);
}
