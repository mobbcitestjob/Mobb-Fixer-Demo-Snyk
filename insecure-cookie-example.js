// Intentionally vulnerable JavaScript file used for CI testing — do not deploy.
// Triggers Snyk Code rule javascript/WebCookieSecureDisabledByDefault: an
// Express POST handler authenticates req.body credentials and sets a 'session'
// cookie without { secure: true }. Pattern mirrors Mobb's canonical insecure_cookie
// test fixture (consumers/analyzer/tests/assets/js/insecure_cookie/express/source/server.js).
const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    // Missing { secure: true } — Snyk flags as WebCookieSecureDisabledByDefault.
    res.cookie('session', 'valid');
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(3000);
