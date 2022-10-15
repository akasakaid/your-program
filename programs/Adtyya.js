/* 
    Unix to readable human
*/

const humanDate = (time) => {
    const _time = new Date(time);
    const dateNow = _time.toLocaleString();

    return console.log(dateNow);
}

const date = Date.now();
humanDate(date);