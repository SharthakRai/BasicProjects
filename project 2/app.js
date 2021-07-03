let data = [
    {
        name: 'Michael',
        job: 'lawyer'
    },
    {
        name: 'Michelle',
        job: 'doctor'
    },
    {
        name: 'Dexter',
        job: 'forensics'
    },
    {
        name: 'Grant',
        job: 'detective'
    },
];



const info = document.querySelector('#info');

let details = data.map(function(item) {
  return '<div>' + item.name + ' ' + 'is a ' 
  + item.job + '</div>';
});

info.innerHTML = details.join('\n');