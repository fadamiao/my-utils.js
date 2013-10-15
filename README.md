# my-utils.js

Useful JavaScript functions


## Infos
 * Made in OS: Windows 7
 * Tested in Browser: Firefox 21+, Chrome 29+, IE 9, Opera 12.16, Safari 5.1.7 (Windows)
 * Language Used: JavaScript 
 * License: BSD 3-Clause License


## List of Functions
    date2iso - Format date DD/MM/YYYY to YYYY-MM-DD
    Input: date - String | Eg.: 15/10/2013
    Output: Eg.: 2013-10-15

    formatInt - Format numbers to any digit
    Input: num - Int, len - Int | Eg.: 15, 4
    Output: Eg.: 0015

    iso2date - Format date YYYY-MM-DD to DD/MM/YYYY
    Input: iso - String | Eg.: 2013-10-15
    Output: Eg.: 15/10/2013

    jsonDownload - Download JSON via Blob
    Input: json - , option - Int or String | Eg.: {"foo":"lorem","bar":"ipsum"}, 2
    Output: Eg.: blob:db89aec3-19a1-44b1-87fe-a7bd114c8460
    Dependence: jsonFormatter

    jsonFormatter - Format JSON
    Input: json - , option - Int or String | Eg.: {"foo":"lorem","bar":"ipsum"}, 2
    Output: Eg.: {
      "foo": "lorem",
      "bar": "ipsum"
    }

    string2float - Convert String Array to Float Array
    Input: value - Array  | Eg.: 
    Output: Eg.: 

    todayDate - Grab the actual day in DD/MM/YYYY format
    Output: Eg.: 15/10/2013
    Dependence: formatInt

    todayISO - Grab the actual day in ISO 8601 format
    Output: Eg.: 2013-10-15
    Dependence: formatInt

    todaytsISO - Grab the actual timestamp in ISO 8601 format
    Output: Eg.: 2013-10-15 11:15
    Dependence: formatInt

    tsISO2tsDate - Format timestamp YYYY-MM-DD HH:MM:SS to DD/MM/YYYY HH:MM:SS
    Input: date - String | Eg.: 2013-10-15 11:15
    Output: Eg.: 15/10/2013 11:15
    Dependence: iso2date

    tw2date - Convert a Twitter API 1.1 Timestamp to ISO 8601 format
    Input: date - String | Eg.: Mon Oct 14 15:35:22 +0000 2013
    Output: Eg.: 2013-10-14 15:35:22
    Dependence: formatInt


## Referencies
 * [formatting - How can I format an integer to a specific length in javascript? - Stack Overflow](http://stackoverflow.com/a/1127966)
 * [javascript - Browser/HTML Force download of image from src="data:image/jpeg;base64..." - Stack Overflow](http://stackoverflow.com/a/10473992)
 * [html - Filename of downloaded file in data:Application/octet-stream; - Stack Overflow](http://stackoverflow.com/a/13914820)
 * [Don't Build Blobs, Construct Them - HTML5Rocks Updates](http://updates.html5rocks.com/2012/06/Don-t-Build-Blobs-Construct-Them)
 * [unix - How to pretty-print JSON from the command line? - Stack Overflow](http://stackoverflow.com/a/3228727)
 * [jquery - How can JavaScript save to a local file? - Stack Overflow](http://stackoverflow.com/q/11071473)
 * [window.btoa - Web API reference | MDN](https://developer.mozilla.org/en-US/docs/Web/API/window.btoa)
 * [Open/Save local (JSON) file from JavaScript >> IE/Firefox - Stack Overflow](http://stackoverflow.com/q/5079295)
 * [Can I use... Support tables for HTML5, CSS3, etc - Blob URLs](http://caniuse.com/#feat=bloburls)
 * [Blob - Web API reference | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
