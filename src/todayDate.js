/*
 * Grab the actual day in DD/MM/YYYY format
 *
 * @author Fernando A. Damião <me@fadamiao.com>
 * @note Created At: 2013-07-03 09:48
 * @note Last Update: 2013-08-18 20:02
 * @return String Actual day in DD/MM/YYYY format
 *
 */
function todayDate() {
  var d = new Date();
  return formatInt(d.getDate(), 2) + '/' + formatInt(d.getMonth() + 1, 2) + '/' + d.getFullYear();
}
