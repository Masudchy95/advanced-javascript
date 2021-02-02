const students = [
    {id: 21, name: "Arman Khan"},
    {id: 31, name: "Salman Khan"},
    {id: 41, name: "Fardeen Khan"},
    {id: 71, name: "Saif Khan"},
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const exceptional = students.filter(s=> s.id > 40);

console.log(names);
console.log(ids);
console.log(exceptional);