import styles from "./App.module.css"
import { Header } from "./components/Header";
import powerdImage from "./assets/powered.png";
import { calculateImc, Level, levels } from "./helpers/imc";
import { useState } from "react";
import { GridItem } from "./components/GridItem";
import leftArrowImage from "./assets/leftarrow.png"


export var showCard : Level | null;
function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () =>{
      if(!(heightField && weightField))
          return alert("Digite todos os campos")
      
      setToShow(calculateImc(heightField,weightField));  
  }

  const handleBackButton = () =>{
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <Header img={powerdImage}/>
      <div className={styles.container}>
      <div className={styles.leftSide}>
            <h1>Calcule seu IMC</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia illum error, quae corporis doloremque id assumenda maiores cumque non nostrum nam incidunt, facere earum labore animi cum tempore? Atque?
            </p>
            <input type="number" placeholder="Digite a sua Altura. Ex: 1.5 (Em métros)" name="" id="" value={heightField > 0 ? heightField : ''} onChange={e=> setHeightField(parseFloat(e.target.value))} disabled={toShow ? true : false}/>
            <input type="number" placeholder="Digite a seu Peso. Ex: 75" name="" id="" value={weightField > 0 ? weightField : ''} onChange={e=> setWeightField(parseFloat(e.target.value))} disabled={toShow ? true : false} />
            <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
        </div>
        {!toShow && 
            <div className={styles.rightSide}>
                <div className={styles.grid}>
                    {levels.map((item, key) => (
                        <GridItem key={key} data={item}/>
                    ))}
                </div>
            </div>} {toShow && 
                <div className={styles.rightBig}>
                    <div className={styles.rightArrow} onClick={handleBackButton}>
                      <img src={leftArrowImage} alt="" width={25} />
                    </div>
                    <GridItem data={toShow}/>
                </div>
            }
      </div>
    </div>
  );
}

export default App;
