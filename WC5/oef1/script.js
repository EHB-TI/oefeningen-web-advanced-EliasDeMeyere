window.onload = () => {


    let resultaat = fetch("data.json")
    .then(result => result.text())
    .then(data => console.log(data))

    let getP = document.getElementById("paragraaf");
    let txt = document.createTextNode(resultaat);
    getP.appendChild(txt);
}