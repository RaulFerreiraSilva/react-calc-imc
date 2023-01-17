import { Level } from "../../helpers/imc";
import "./style.css"
import upImage from "../../assets/up.png"
import downImage from "../../assets/down.png"
type Props = {
    data: Level
}


export const GridItem = ({ data }: Props) => {
    return (
        <div className="main" style={{ backgroundColor: data.color }}>
            <div className="gridIcon">
                <img src={data.icon === 'up' ? upImage : downImage} width="30px" alt="" />
            </div>

            <div className="gridTitle">
                {data.title}
            </div>

            {data.yourImc &&
                <div className="yourImc"> seu Imc é de {data.yourImc} kg/m²</div>
            }

            <div className="gridInfo">
                <>
                    Imc está entre <strong>{data.imc[0]} e {data.imc[1]} </strong>
                </>
            </div>
        </div>
    );
}