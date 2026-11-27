import StatBar from "./StatBar.jsx";

const statsDefault = [
    {
        name: "Point de vie",
        current: "156",
        max: "300",
        type:"hp"
    },
    {
        name: "Points de mana",
        current: "35",
        max: "40",
        type:"mana"
    },
    {
        name: "Endurance",
        current: "32",
        max: "100",
        type:"stamina"
    },
    {
        name: "Expérience",
        current: "1300",
        max: "5000",
        type:"xp"
    }
]
export default function StatBars({stats= statsDefault}){

    return (
        stats.map((stat) => {
            return <StatBar key={stat.name} {...stat} /> //stat.nama permet de faire en sorte que react ne recharge pas tout le tableau à chaque fois, mais que la partie qui change selon s'il y a un nouveau name
        })
    );
}