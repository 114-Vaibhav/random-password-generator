let btn = document.getElementById('btn')
// btn.style.width="300px"

// console.log(pass);
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "qwertyuiopasdfghjklzxcvbnm";
const number = "1234567890";
const spcl = "!@#$%^&*()_+{}[]-=";
btn.addEventListener("click", function () {
    let pass = "";

    for (let i = 0; i < 3; i++) {
        // let x= (126-33+1)*Math.random();
        // pass+=String.fromCharCode(Math.ceil(x));
        // pass+=x;
        let y = Math.floor(26 * Math.random());
        // pass+=String.fromCharCode(x);
        pass += lower[y];

        let x = Math.floor(26 * Math.random());
        // pass+=String.fromCharCode(x);
        pass += upper[x];


        let z = Math.floor(10 * Math.random());
        // pass+=String.fromCharCode(x);
        pass += number[z];

        let w = Math.floor(18 * Math.random());
        // pass+=String.fromCharCode(x);
        pass += spcl[w];

    }
    document.getElementById('inpt').value = pass;
})

document.getElementById('copy').addEventListener("click", function () {
    document.getElementById('inpt').select()
    document.execCommand("copy")
})