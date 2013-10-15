/*
 * my-utils.js - v1.0.0 - Useful JavaScript functions
 * Author: Fernando A. Damião <me@fadamiao.com>
 * License: BSD-3-Clause
 * Repository: https://github.com/fadamiao/my-utils.js
 * Last Build: 2013-10-15 14:10
 *
 */

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

/*
 * Format JSON
 *
 * @author Fernando A. Damião <me@fadamiao.com>
 * @note Created At: 2013-09-05 08:43
 * @note Last Update: 2013-09-05 09:59
 * @return String Formated JSON
 *
 */
function jsonFormatter(json, option) {
  var json = JSON.parse(json);
  if (option == "compact") {
    if (typeof json === 'object') {
      json = JSON.stringify(json);
    }
  } else {
    if (option == "2" || option == "4") {
      option = parseInt(option);
    } else {
      option = '\t';
    }
    if (typeof json === 'object') {
      json = JSON.stringify(json, null, option);
    }
  }
  return json;
}

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

