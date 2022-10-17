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

/* 
    Greetings 
*/

const greetings = (name) => {
    let u_name = name.toString().toUpperCase();
    return console.log(u_name);
}
greetings("Halo")

/*
    Looping example
*/

for (var i = 1; i < 5; i++)
{
    console.log(`Looping ${i} times`);
}

/* 
    Abort controller
*/

const controller = new AbortController();
let aborted = controller.abort();
console.log(aborted)