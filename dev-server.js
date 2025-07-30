// Development server launcher
const { spawn } = require('child_process');
const path = require('path');

// Set environment variables
process.env.NODE_ENV = 'development';
process.env.PORT = '5000';

console.log('🚀 Starting TalentrixRecruit Development Server...');
console.log('📁 Environment: development');
console.log('🌐 Port: 5000');
console.log('🔄 Live reloading enabled!');
console.log('');

// Path to tsx executable
const tsxPath = path.join(__dirname, 'node_modules', '.bin', 'tsx');
const serverPath = path.join(__dirname, 'server', 'index.ts');

// Spawn the tsx process
const child = spawn('node', [tsxPath, serverPath], {
  stdio: 'inherit',
  env: process.env,
  cwd: __dirname
});

child.on('error', (error) => {
  console.error('❌ Failed to start server:', error.message);
  process.exit(1);
});

child.on('close', (code) => {
  console.log(`\n📴 Server stopped with code ${code}`);
  process.exit(code);
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping development server...');
  child.kill('SIGINT');
});
