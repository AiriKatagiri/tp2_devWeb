import './StatBar.css'
export default function StatBar({name, current, max, type}){
    const tauxRemplissage = current/max * 100;

    //il faut mettre des "{" pour que ce soit vu comme une variable et plus comme du texte dans le InnerText.
    // dans une chaine de caractère, il faut rajouter un $ devant en plus des {.
    // Comme CSS dans style on doit rajouter une autre acolade ( { ) dans l'acolade
    return <div className={`stat-bar stat-bar--${type}`}>
        <div className={"stat-bar__label"}>
            <span className={"stat-bar__name"}>{name}</span>
            <span className={"stat-bar__value"}>{current}/{max}</span>
        </div>
        <div className={"stat-bar__track"}>
            <div className={"stat-bar__fill"} style={{width: `${tauxRemplissage}%`}}></div>
        </div>
    </div>
}