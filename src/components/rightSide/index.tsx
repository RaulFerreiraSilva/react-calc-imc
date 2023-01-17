import "./style.css"
import { GridItem } from "../GridItem";
import { levels, calculateImc } from "../../helpers/imc";
import { showCard } from "../leftSide";

type props = {
    classN : string,
}

export function RightSide({classN}:props){ 
    return (
        <>{!showCard && 
            <div className={classN}>
                <div className="grid">
                    {levels.map((item, key) => (
                        <GridItem key={key} data={item}/>
                    ))}
                </div>
            </div>} {showCard && 
                <div className="rightBig">
                    <div className="rightArrow"></div>
                    <GridItem data={showCard}/>
                </div>
            }
        </>
    );
}