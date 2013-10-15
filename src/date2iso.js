/*
 * Format date DD/MM/YYYY to YYYY-MM-DD
 *
 * @author Fernando A. Damião <me@fadamiao.com>
 * @note Created At: 2013-07-03 09:30
 * @note Last Update: 2013-07-03 09:30
 * @return String Date in ISO 8601 format
 *
 */
function date2iso(date) {
  return date.split('/').reverse().join('-');
}
