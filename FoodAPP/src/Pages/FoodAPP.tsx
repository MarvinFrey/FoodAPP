import React from 'preact';
import Button from '../Components/Button';
import { useState } from "preact/hooks";
import { getRandomNumber } from "../Logic";
import { Link } from 'react-router-dom';

var counter = 0;

function FoodAPP() {

    const [ZufallEssen, setZufallsEssen] = useState("?");
    const [EssenListe, setEssenListe] = useState([""]);


    const heuteEssen = () => {
        let rnd = getRandomNumber(0, EssenListe.length as number);
        setZufallsEssen(EssenListe[rnd]);

        console.log(rnd);
    };

    const EssenAnlegen = () => {
        const x = (document.getElementById("test") as HTMLInputElement).value;

        if (x != undefined && x != "") {
            let rndarray: string[] = EssenListe;
            rndarray[counter] = x;
            setEssenListe(rndarray);
            counter++;
            (document.getElementById("test") as HTMLInputElement).value = "";
        }
        else {
            console.log("Ungültige Eingabe");

        }

        console.log(EssenListe);
    };

    return (
        <div>
            <button onClick={heuteEssen}>Was will ich heute essen?</button>
            <div class="mt-2"></div>
            <button onClick={EssenAnlegen}>Neues Gericht Anlegen</button>
            <div class="mt-2"></div>
            <input type="text" id="test" />
            <div class="mt-2"></div>
            <label class="w-10">{ZufallEssen}</label>
            <div class="mt-2"></div>

            <Link to={`about`}>Neues Gericht Anlegen</Link>
        </div>
    );
}

export default FoodAPP;