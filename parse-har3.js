const fs = require('fs');
const har = JSON.parse(fs.readFileSync('ui-query-succeed-sharepoint-1519-CET.har', 'utf8'));

const entries = har.log.entries.filter(e => e.request.url.includes('widgetStreamAssist') && e.request.method === 'POST');

if (entries.length > 0) {
  const req = entries[0].request;
  console.log("Cookies:", req.cookies.length);
  req.cookies.forEach(c => console.log(`${c.name}: ${c.value.substring(0, 30)}...`));
} else {
  console.log("No widgetStreamAssist POST request found in HAR.");
}
