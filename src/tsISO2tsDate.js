/*
 * Format timestamp YYYY-MM-DD HH:MM:SS to DD/MM/YYYY HH:MM:SS
 *
 * @author Fernando A. Damião <me@fadamiao.com>
 * @note Created At: 2013-0
 * @note Last Update: 2013-08-05 13:30
 * @return String Timestamp in DD/MM/YYYY HH:MM:SS
 *
 */
function tsISO2tsDate(date) {
  var date = date.split(' ');
  return iso2date(date[0]) + ' ' + date[1];
}
