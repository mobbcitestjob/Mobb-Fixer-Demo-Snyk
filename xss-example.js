// This is an intentionaly vulnerable Javascript file used for testing, do not use or deploy it anywhere.
const DOMPurify = require('dompurify');

var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

var unsafe_div = window.document.getElementById("vulnerable-div");
// here's an XSS:
unsafe_div.innerHTML = DOMPurify.sanitize("Hello to you " + username);
