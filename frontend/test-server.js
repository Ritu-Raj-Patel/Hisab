/* eslint-env node */

const http = require('http');

async function testConnection() {
  try {
    const response = await http.get('http://localhost:5173/', {
      timeout: 5000
    });
    console.log('✅ Server is accessible');
    console.log('Status:', response.status);
    return response;
  } catch (error) {
    console.log('❌ Connection failed:', error.message);
    return false;
  }
}

testConnection();
