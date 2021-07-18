let output = document.getElementById('output');
let numberDate = document.getElementById('date');

let d = new Date();
let day = d.getDay();
let ndate = d.toLocaleString();

switch (day){
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'monday';
        break;
    case 2:
        day = 'tuesday';
        break;
    case 3:
        day = 'wednesday';
        break;
    case 4:
        day = 'thursday';
        break;
    case 5:
        day = 'friday';
        break;
    case 6:
        day = 'saturday';
        break;
}

output.innerHTML = day;
date.innerHTML = ndate;