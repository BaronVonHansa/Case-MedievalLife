import WarriorTypeModule from '../modules/WarriorModule.js';

const warriorTypeDiv = document.querySelector("#warrior-types-div");
const chosenWarriorTypesDiv = document.querySelector("#chosen-warrior-types-div");

const generateWarriorTypes = () => {

    let htlmTxt = "";

    WarriorTypeModule.getAll().forEach(WarriorObject =>{
        htlmTxt += `
            <article class="column" >
                <div class="has-background-info">
                    <h3>${WarriorObject.type}</h3>
                    <p>${WarriorObject.weapon}</p>
                    <button data-image="${WarriorObject.image}">Legg til</button>
                
                </div>
            
            </article>
        
        `;
    }); //End forEach loop

    warriorTypeDiv.innerHTML = htlmTxt;

    document.querySelectorAll("button").forEach( button =>{
       
        button.addEventListener("click", (e) =>{
       
            chosenWarriorTypesDiv.innerHTML +=`
            <article class="column">
                <img src="../images/warriors/${e.currentTarget.dataset.image}">
            </article>
            `;
        } )
    } );
}
generateWarriorTypes(); //KJØRER FUNKJSONEN, TRENGS