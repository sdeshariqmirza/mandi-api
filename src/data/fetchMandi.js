const axios = require('axios');

const API_URL = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070';
const API_KEY = '579b464db66ec23bdd000001a0846edacaae476e5d3d1edc4802575a';

async function fetchMandiData() {
  try {
    const response = await axios.get(API_URL, {
      params: {
        'api-key': API_KEY,
        format: 'json',
        limit: 100
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
