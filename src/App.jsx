import StatBars from "./components/StatBars.jsx";
import './App.css'
export default function App(){
  return <StatBars stats={[
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
      name: "Test",
      current: "13",
      max: "30",
      type:"xp"
    }
  ]}/>
}