// let result = document.getElementById('result');
//
// const getRandomLinks = () => {
//
//     result.innerHTML = "";
//     fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=prefixsearch&prop=extracts&exlimit=10&exintro&explaintext&gpslimit=10&gpssearch=' + 'Curiosity_(rover)' + '&origin=*', {
//     method: 'GET'}).then(response => response.json()).then(data => {
//
//     Object.keys(data.query.pages).map(function(key) {
//         const {
//             title,
//             extract
//         } = data.query.pages[key];
//
//
//     const li = document.createElement('li');
//     const text = li.textContent;
//     li.textContent = '';
//     const a = document.createElement('a');
//
//     a.setAttribute('target', '_blank');
//
//     a.innerHTML = `${extract}`;
//     li.appendChild(a);
//
//
//     result.appendChild(li);
//
//
//
//
// });
// })
//
//
// }
//
// getRandomLinks();
//
