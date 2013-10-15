/*
 * Format date YYYY-MM-DD to DD/MM/YYYY
 *
 * @author Fernando A. Damião <me@fadamiao.com>
 * @note Created At: 2013-07-03 09:30
 * @note Last Update: 2013-07-03 09:30
 * @return String Date in DD/MM/YYYY
 *
 */
function iso2date(iso) {
  return iso.split('-').reverse().join('/');
}
