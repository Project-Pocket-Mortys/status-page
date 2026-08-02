const fs = require('fs');

const summary = JSON.parse(fs.readFileSync('history/summary.json'));
const site = summary.find(s => s.slug === 'pocket-mortys-server');

const badge = {
  schemaVersion: 1,
  label: 'Server',
  message: site.status,
  color: site.status === 'up' ? 'brightgreen' : 'red'
};

fs.mkdirSync('badges', { recursive: true });
fs.writeFileSync('badges/pocket-mortys-server.json', JSON.stringify(badge));
