let htmlContentToAppend = "";
let snorlax= "";

fetch(`https://pokeapi.co/api/v2/pokemon/snorlax`)
  .then(response => response.json())
  .then(data => {
    snorlax = data
    console.log(snorlax);
    htmlContentToAppend += `
    <div class="row" id="datosSnorlax">
        <h2>Snorlax</h2>
        <h3>Experiencia base</h3>
            <p>${snorlax.base_experience}</p>
        <h3>Altura</h3>
            <p>${snorlax.height}</p>
        <h3>Peso</h3>
            <p>${snorlax.weight}</p>
        <h3>Habilitades</h3>
            <p>${snorlax.abilities[0].ability.name}<p>${snorlax.abilities[1].ability.name}<p>${snorlax.abilities[2].ability.name}</p></p></p>
    </div> `;
    document.getElementById("snorlax").innerHTML = htmlContentToAppend;
  });




 





