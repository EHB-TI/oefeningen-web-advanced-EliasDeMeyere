window.onload = async () => {
    console.log("LOADED");

    let resultaat = await fetch('data.json');
    let data = await resultaat.json();
    console.log(data);

    let div = document.getElementById('content');
    let p = document.createElement('p');
    p.innerText = `My name is ${data.name} and I am ${data.age} years old.`;
    div.appendChild(p);
}