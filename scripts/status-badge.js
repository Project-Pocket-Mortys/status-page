const fs = require('fs');

const summary = JSON.parse(fs.readFileSync('history/summary.json'));
const site = summary.find(s => s.slug === 'pocket-mortys-server');

const isUp = site.status === 'up';

const badge = {
  schemaVersion: 1,
  label: 'Server Status',
  message: isUp ? 'online' : 'offline',
  color: isUp ? 'brightgreen' : 'red'
};

fs.mkdirSync('badges', { recursive: true });
fs.writeFileSync('badges/pocket-mortys-server.json', JSON.stringify(badge));
