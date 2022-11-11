const inputText = document.getElementById("inputText");
const fatal = document.getElementById("fatal");
const infected = document.getElementById("infected");
const recovered = document.getElementById("recovered");
const namakota = document.getElementById("namekota");

const totalinfected = document.getElementById("totalinfected");
const totalrecovered = document.getElementById("totalrecovered");
const totalfatal = document.getElementById("totalfatal");

$("#submitBtn").click(function(e)
{
    e.preventDefault();
    const url = "/stats.json";

    fetch(url)
    .then((data) => data.json())
    .then(data => {
        // console.log(inputText.value)
        
        const info = data.regions

        const getinfo = info.filter((dikota) => dikota.name == inputText.value)
        console.log(getinfo);
        namakota.innerHTML = `Kota : ${getinfo[0].name}`
        infected.innerHTML = `Infected : ${getinfo[0].numbers.infected}`
        recovered.innerHTML = `Recovered : ${getinfo[0].numbers.recovered}`
        fatal.innerHTML = `Fatal : ${getinfo[0].numbers.fatal}`
    })

})

if(top.location.pathname === '/page3.html'){
    $(document).ready(() => {
    const url = "/stats.json";

    fetch(url)
    .then((data) => data.json())
    .then(data => {

        const infototal = data.numbers

        totalinfected.innerHTML = `${infototal.infected}`
        totalrecovered.innerHTML = `${infototal.recovered}`
        totalfatal.innerHTML = `${infototal.fatal}`
        console.log(data);
    })
    })
}
