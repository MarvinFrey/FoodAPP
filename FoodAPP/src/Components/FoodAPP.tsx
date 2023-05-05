import React from 'preact';
import Button from './Button';
import { useState } from "preact/hooks";
import Logic from "../Logic";

function FoodAPP() {
    let Essen: string[] = ["Salz", "Zucker", "Spaghetti", "Ekelhaft"];
    let counter = 0;

    const [ZufallEssen, setZufallsEssen] = useState("?");

    const heuteEssen = () => {
        let rnd = getRandomNumber(0, Essen.length as number);
        setZufallsEssen(Essen[rnd]);

        console.log(rnd);
    };

    const getRandomNumber = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    };

    const EssenAnlegen = () => {
        const x = (document.getElementById("test") as HTMLInputElement).value;

        if (x != undefined) {
            Essen[counter] = x;
            counter++;
        }

        console.log(Essen);
    };

    return (
        <div>
            <button onClick={heuteEssen}>Was will ich heute essen?</button>
            <div class="mt-1"></div>
            <button onClick={EssenAnlegen}>Neues Gericht Anlegen</button>
            <div class="mt-1"></div>
            <input type="text" id="test" />
            <div class="mt-1"></div>
            <label class="w-10">{ZufallEssen}</label>

        </div>
    );
}

export default FoodAPP;