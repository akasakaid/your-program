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

/*
    3/2/1
*/

const search = (num) => {
    let c_num = []
    let floor = 0;
    let idx = 0;
    const z = [5,6,7]
    for(var i = 1; i <= num; i++)
    {
        c_num.push(i)
    }

    do {
        floor+=1
        c_num.splice(0, z[idx]);
        idx+=1;
        if(idx == 3) idx = 0
    } while (c_num.length > 0);
    console.log(`Berada di lantai ${floor}`)
    return floor;
}
