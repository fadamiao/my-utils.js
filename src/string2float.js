/*
 * Convert String Array to Float Array
 *
 * @author Fernando A. Damião <me@fadamiao.com>
 * @note Created At: 2013-07-03 09:40
 * @note Last Update: 2013-07-03 09:40
 * @return Array Array with Float elements
 *
 */
function string2float(value) {
  var n = 0;
  var buffer = new Array();
  for (i in value) {
    buffer[n++] = parseFloat(value[i]);
  }
  return buffer;
}
