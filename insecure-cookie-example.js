// This is an intentionally vulnerable JavaScript file used for testing, do not deploy.
// Triggers Snyk Code rule WebCookieSecureDisabledByDefault — insecure cookie without secure flag.

const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  // Missing { secure: true } flag on the cookie
  res.cookie("session_id", "abc123");
  res.send("Logged in");
});

app.listen(3000);
