/*
 * Convert a Twitter API 1.1 Timestamp to ISO 8601 format
 *
 * @author Fernando A. Damião <me@fadamiao.com>
 * @note Created At: 2013-09-03 14:00
 * @note Last Update: 2013-09-03 14:35
 * @return String Timestamp in YYYY-MM-DD HH:MM:SS
 *
 */
function tw2date(date) {
  var d = date.split(' ');
  var ts = new Date(Date.parse(d[0] + ', ' + d[2] + ' ' + d[1] + ' ' + d[5] + ' ' + d[3] + ' GMT' + d[4]));
  return ts.getFullYear() + '-' + formatInt(ts.getMonth() + 1, 2) + '-' + formatInt(ts.getDate(), 2) + ' ' + formatInt(ts.getHours(), 2) + ':' + formatInt(ts.getMinutes(), 2) + ':' + formatInt(ts.getSeconds(), 2);
}
