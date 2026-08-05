const fs = require('fs');
const har = JSON.parse(fs.readFileSync('ui-query-succeed-sharepoint-1519-CET.har', 'utf8'));

const entries = har.log.entries.filter(e => e.request.url.includes('widgetStreamAssist') && e.request.method === 'POST');

if (entries.length > 0) {
  const req = entries[0].request;
  console.log("=== REQUEST URL ===");
  console.log(req.url);
  console.log("\n=== REQUEST HEADERS ===");
  req.headers.forEach(h => console.log(`${h.name}: ${h.value}`));
  console.log("\n=== REQUEST POST DATA ===");
  if (req.postData && req.postData.text) {
    console.log(JSON.stringify(JSON.parse(req.postData.text), null, 2));
  }
} else {
  console.log("No widgetStreamAssist POST request found in HAR.");
}
