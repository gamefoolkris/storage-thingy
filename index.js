const { open } = require('node-lmdb');

const db = open({
  path: './storage-db',
  compression: true,
});

// High-speed sync operations
let counter = db.get('counter') || 0;
db.put('counter', counter + 1);

console.log(db.get("counter"));