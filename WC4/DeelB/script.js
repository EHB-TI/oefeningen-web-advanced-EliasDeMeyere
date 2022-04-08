'use strict'
let config = null;

async function getConfig(){ 
    let resp = await fetch('config.json')
    let data = await resp.json()
    config = data;
}

window.onload = () => {
    console.log("Loaded: Time Wasted!")
    getConfig();
    let timeWasted = 0;


    async function getData(searchParameter){
        let resp = await fetch(`${config.baseurl}t=${searchParameter}&apikey=${config.apikey}`)
        let data = await resp.json()
        return data;
    }

    function showMovieCard(movie){
        document.getElementById('MovieTitle').innerText = movie.Title;
        document.getElementById('MoviePlot').innerText = movie.Plot;
        document.getElementById('Runtime').innerText = movie.Runtime;
        document.getElementById('ReleaseDate').innerText = movie.Released;
        document.getElementById('MoviePoster').setAttribute('src', movie.Poster);

        document.getElementById('card').style.display = 'block';
    }
    
    let submitForm = event => {
        event.preventDefault();
        let value = document.getElementById('inputTitle').value;
        // console.log(value);
        let result = getData(value).then(result => {
            // console.log(result);
            showMovieCard(result);
        });
    }

    function counterAdd(){
        let runtimeMin = document.getElementById('Runtime').innerText;
        let runtimeMinArr = runtimeMin.split(' ')
        // console.log(runtimeMinArr);
        let runtime = runtimeMinArr[0];
        // console.log(runtime)
        parseInt(runtime);
        timeWasted = parseInt(timeWasted) + parseInt(runtime);
        console.log(timeWasted)
        let hoursWasted = timeWasted / 60;
        let hoursWastedTrunc = hoursWasted.toFixed(1)
        document.getElementById("Counter").innerText = `You have wasted ${timeWasted} minutes! 
        That is (about) ${hoursWastedTrunc} hours!`
    }; 

    document.getElementById('searchForm').addEventListener('submit', submitForm);
    // document.getElementById('inputTitle').addEventListener('keypress', submitForm);
    document.getElementById('CounterButton').addEventListener('click', counterAdd);

    document.getElementById('card').style.display = 'none';
}