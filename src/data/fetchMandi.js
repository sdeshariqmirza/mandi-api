const axios = require('axios');
require('dotenv').config();
const API_URL = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070';
const API_KEY = process.env.DATA_GOV_API_KEY;


async function fetchMandiData() {
  try {
    const response = await axios.get(API_URL, {
      params: {
        'api-key': API_KEY,
        format: 'json',
        limit: 500
      }
    });
    console.log('Data fetched successfully!');
    return response.data.records;
  } catch (error) {
    console.log('Error fetching data:', error.message);
    return [];
  }
 
}


module.exports = fetchMandiData; 
