"use strict";
console.log("CONNECTED");

function getData() {
    return $.ajax({url: "./data.json", dataType: 'json'})
}

getData().then((data) => {
    let allPokemon = data.allPokemon;
    Object.keys(allPokemon).map((item)=>{
        allPokemon[item].FBkey = item;
    });
    return allPokemon
}).then((data)=>{
    Object.keys(data).map((item)=>{
        console.log(data[item])
        $(".main").append(`
        <ul>
            <li>Name: ${data[item].name}</li>
            <li><img src="${data[item].ThumbnailImage}" /></li>
            <li>Height: ${data[item].height}</li>
            <li>Firebase Key: ${data[item].FBkey}</li>
        </ul>`);
    })
});