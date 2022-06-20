let data;
window.onload = async () => {
    console.log('LOADED');

    const resultaat = await fetch('data.json');
    data = await resultaat.json();
    console.log(data);

    vulKlasgroep();


    document.getElementById('klasgroep')
    .addEventListener('change', (event) =>{
        vulLeerlingen(event.target.value);
    });

    document.getElementById('leerlingen')
    .addEventListener('change', (event) => {
        let h3 = document.getElementById('studid');
        h3.innerText = `StudentenID: ${event.target.value}`;
    })
}

function vulKlasgroep(){
    let select = document.getElementById('klasgroep');
    for (let klasgroep in data){
        let option = document.createElement('option');
        option.innerText = klasgroep;
        option.value = klasgroep;
        select.appendChild(option);
    }
}

let vulLeerlingen = (klasgroep) => {
    let select = document.getElementById('leerlingen');
    select.innerHTML = '';
    for (let id in data[klasgroep]){
        let option = document.createElement('option');
        option.innerText = data[klasgroep][id];
        option.value = id;
        select.appendChild(option);
    }
};