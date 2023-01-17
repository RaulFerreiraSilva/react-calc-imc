import "./style.css"
type prop = {
    img : string,
}

export function Header({img}:prop){
    return(
        <header>
            <div className="headerContainer">
                <img src={img} alt=""  width={150}/>
            </div>
        </header>
    );
}

