const path = require('path');

// Set production environment
process.env.NODE_ENV = 'production';

// Correctly resolve the standalone server produced by Next.js build
// This avoids hardcoded paths that cause "Internal Server Error"
const standaloneServer = path.join(__dirname, '.next', 'standalone', 'server.js');

try {
  console.log('Starting Next.js standalone server from:', standaloneServer);
  require(standaloneServer);
} catch (error) {
  console.error('Error starting server:', error);
  process.exit(1);
}