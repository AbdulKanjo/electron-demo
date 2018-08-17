const ipc = require('electron').ipcRenderer;
const axios = require('axios');

const fetchDataBtn = document.getElementById('fetch-data-btn');

fetchDataBtn.addEventListener('click', function (event) {
  console.log('CLICKED!');
  fetctData();
})

const fetctData = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
      console.log(data.data);
    });
}