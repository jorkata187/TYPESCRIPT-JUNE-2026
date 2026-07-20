enum Months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November ,
    December 
}

function friday13th(param: unknown[]) {
    param.forEach((el) => {
        if (el instanceof Date && el.getDate() === 13 && el.getDay() === 5) {
            console.log(`${el.getDate()}-${Months[el.getMonth()]}-${el.getFullYear()}`);
        }
    })
}