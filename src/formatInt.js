/*
 * Format numbers to any digit
 *
 * @author Fernando A. Damião <me@fadamiao.com>
 * @note Created At: 2013-06-20 10:02
 * @note Last Update: 2013-08-18 20:09
 * @return String Formated number
 *
 */
function formatInt(num, len) {
  var buff = num;
  var size = num.toString().length;
  while (len > size) {
    buff = '0' + buff;
    len--;
  }
  return buff;
}
