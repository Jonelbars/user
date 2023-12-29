// main.js

const apiEndpoint = 'https://localhost:7237/swagger/v1/swagger.json';

fetch(apiEndpoint)


  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data from Express API:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  