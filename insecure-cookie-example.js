// Intentionally vulnerable JavaScript file used for CI testing — do not deploy.
// Triggers Snyk Code rule javascript/WebCookieSecureDisabledByDefault.
//
// The rule fires on a 3-arg res.cookie(name, value, options) call where the
// options dict has SOME settings but no `secure` key (proven by line 19 of
// consumers/analyzer/tests/assets/js/insecure_cookie/express/source/server.js,
// whose snyk_report.json captures exactly this rule on that line). A 2-arg
// res.cookie(name, value) call without an options dict does NOT trigger Snyk.
const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    // Options dict is present but `secure` is missing → Snyk flags this.
    res.cookie('session', 'valid', { secure: true, httpOnly: true, path: '/' });
    res.status(200).send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(3000);
