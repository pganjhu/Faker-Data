// To generate value for column 1
let n = 10000;
let columns = { 1: [], 2: [], 3: [] };
let totalMobileApp = (n * 25) / 100;
let totalMobileWeb = (n * 30) / 100;
let totalProduct = (n * 60) / 100;
let totalFeedback = (n * 40) / 100;
let totalWeb = n - totalMobileApp - totalMobileWeb;
let finalCsvArray = [];

console.log(totalMobileApp, totalMobileWeb, totalWeb);

for (let i = 0; i < n; i++) {
  columns['1'].push(Math.floor(1000000000 + Math.random() * 9000000000));
}

for (let i = 0; i < totalMobileApp; i++) {
  columns['2'].push('mobile app');
}

for (let i = 0; i < totalMobileWeb; i++) {
  columns['2'].push('mobile web');
}

for (let i = 0; i < totalWeb; i++) {
  columns['2'].push('web');
}

for (let i = 0; i < totalProduct; i++) {
  columns['3'].push('home product');
}

for (let i = 0; i < totalFeedback; i++) {
  columns['3'].push('home feedback');
}

columns['2'] = shuffleArray(columns['2']);
columns['3'] = shuffleArray(columns['3']);

console.log(columns);
let headerCsv = Object.keys(columns);
headerCsv.push('\n');
finalCsvArray.push(headerCsv);
for (let i = 0; i < n; i++) {
  finalCsvArray.push([columns['1'][i], columns['2'][i], columns['3'][i], '\n']);
}
console.log(finalCsvArray);
renameHeader();
console.log(finalCsvArray);

// Shuffle array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function renameHeader() {
  let newHeader = ['ECID', 'Device Id', 'page flow'];
  finalCsvArray[0] = newHeader[0];
  finalCsvArray[1] = newHeader[1];
  finalCsvArray[2] = newHeader[2];
}
// Click on button to download
document.getElementById('clickHereToDownliod').onclick = function () {
  let hiddenElement = document.createElement('a');
  hiddenElement.href =
    'data:text/csv;charset=utf-8,' + encodeURI(finalCsvArray);
  hiddenElement.target = '_blank';

  //provide the name for the CSV file to be downloaded
  const fileName = 'test' + Math.floor(Math.random() * 1000);
  hiddenElement.download = `${fileName}.csv`;
  hiddenElement.click();
};
