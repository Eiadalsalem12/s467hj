let countEl = document.getElementById("count-el");

let count = 0;

let word = document.getElementById("demo");

const world = document.createElement("h1");



const id = document.getElementsByTagName("h1")[0].id;
document.getElementById("hi").innerHTML = id;




function firebase() {

    count += 1;
    countEl.innerText = count;

    if (count == 10) {
        woed1 = " لقد عملت 10 تسبيحات مبروك مقدما";
        word.innerText = woed1;
    }
}




function youe() {

    count -= 1;
    countEl.innerText = count;
    if (count -= 0) {
        woed12 = "This is a paragraph.";
        world.innerText = woed12;
        world.classList.add("class1");
    }
}


function reset() {
    count = 0;
    countEl.innerText = count;
    if (count == 0) {
        reset1 = "لقد قمت ب إعادة تعيين للتسبيحات";
        world.innerText = reset1;
        world.classList.add("class1");
    }
}