import { useState } from "react";
import { calculateImc, Level } from "../../helpers/imc";
import { RightSide } from "../rightSide";
import "./style.css"
type props = {
    classN : string, 
}

export var showCard : Level | null;

export function LeftSide({ classN }: props) {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null);

    const handleCalculateButton = () =>{
        if(!(heightField && weightField))
            return alert("Digite todos os campos")
        
        setToShow(calculateImc(heightField,weightField));  
        showCard = toShow; 
        RightSide({classN});
    }

    return (
        <div className={classN}>
            <h1>Calcule seu IMC</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia illum error, quae corporis doloremque id assumenda maiores cumque non nostrum nam incidunt, facere earum labore animi cum tempore? Atque?
            </p>
            <input type="number" placeholder="Digite a sua Altura. Ex: 1.5 (Em métros)" name="" id="" value={heightField > 0 ? heightField : ''} onChange={e=> setHeightField(parseFloat(e.target.value))}/>
            <input type="number" placeholder="Digite a seu Peso. Ex: 75" name="" id="" value={weightField > 0 ? weightField : ''} onChange={e=> setWeightField(parseFloat(e.target.value))}  />
            <button onClick={handleCalculateButton}>Calcular</button>
        </div>
    );
}