import * as React from "react";

import "./App.css";

import Cartitas from "./components/cartas";

function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const [reload, setReload] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setData([
        {
          name: "Selva la candona",
          area: "20km cuadrados",
          days: 20,
        },
        {
          name: "Sureste de Oceania",
          area: "40km cuadrados",
          days: 5,
        },
        {
          name: "Selva del congo",
          area: "50km cuadrados",
          days: 10,
        },
        {
          name: "Amazonas",
          area: "100km cuadrados",
          days: 40,
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  React.useEffect(() => {
    console.log("Me estoy ejecutando");
  }, [reload]);

  if (loading) {
    return <div>CARGANDO....</div>;
  }

  return (
    <div>
      <h1>Alerta Incendios</h1>
      <div>
        {data.map((item, idx) => {
          return <Cartitas idx={idx} incendio={item} />;
        })}
        <button onClick={() => setReload(!reload)}>Ejecutar de nuevo</button>
      </div>
    </div>
  );
}

export default App;
