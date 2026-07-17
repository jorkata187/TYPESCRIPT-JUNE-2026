enum DaysOfTheWeek {
    Monday, // 0
    Tuesday, // 1
}
console.log(DaysOfTheWeek.Tuesday);
console.log(DaysOfTheWeek[1]);

let day: DaysOfTheWeek;
day = DaysOfTheWeek.Monday;

if(day === DaysOfTheWeek.Monday) {
    console.log('I hope you all had a great weekend');
}
