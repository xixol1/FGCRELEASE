import { useState } from "react";
import { estacions } from "./importarDatos.ts";
import TrenesCirculacion from "./TrenesEnCirculacion.tsx";

export default function App() {
  const [vista, setVista] = useState("horarios"); // Vista actual ("horarios" o "trenes")
  const [filtro, setFiltro] = useState(""); // Texto del input de búsqueda
  const [terminoBusqueda, setTerminoBusqueda] = useState(""); // Texto aplicado al hacer submit

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita recarga del formulario
    setTerminoBusqueda(filtro); // Aplica el filtro actual
  };

  // Convierte una hora string "HH:MM:SS" a segundos
  const convertirHoraASegundos = (hora: string) => {
    const [horas, minutos, segundos] = hora.split(":").map(Number);
    return horas * 3600 + minutos * 60 + segundos;
  };

  // Filtra y ordena estaciones por hora de salida
  const estacionesFiltradas = estacions
    .filter((estacio) =>
      estacio.stop_name.toLowerCase().includes(terminoBusqueda.toLowerCase())
    )
    .sort((a, b) => convertirHoraASegundos(a.departure_time) - convertirHoraASegundos(b.departure_time));

  return (
    <div className="mainContainer">
      <div className="header">
        {/* Logo */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Ferrocarrils_de_la_Generalitat_de_Catalunya_logo_%282019%29.svg/200px-Ferrocarrils_de_la_Generalitat_de_Catalunya_logo_%282019%29.svg.png" 
          alt="Imagen de perfil" 
        />
        {/* Botones de vista */}
        <button className="Seleccio" onClick={() => setVista("horarios")}>Horaris</button>
        <button className="Seleccio" onClick={() => setVista("trenes")}>Trens en circulació</button>

        {/* Barra de búsqueda solo en vista de horarios */}
        {vista === "horarios" && (
          <form onSubmit={handleSubmit} className="Searchbar">
            <input
              type="text"
              placeholder="Buscar estació..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="filtro-input"
            />
            <button type="submit">Buscar</button>
          </form>
        )}
      </div> 

      {/* Vista condicional según selección */}
      {vista === "horarios" ? (
        <div className="container">
          {estacionesFiltradas.length > 0 ? (
            estacionesFiltradas.map((estacio, index) => (
              <div key={index} className="grid">
                {/* Info básica de cada estación */}
                <h2 style={{ backgroundColor: `#${estacio?.route_color}` }}>
                  {estacio.route_short_name}: {estacio.trip_headsign}
                </h2>
                <h1>{estacio.stop_name}</h1>
                <h3>Hora de entrada: {estacio.arrival_time}</h3>
                <h3>Hora de salida: {estacio.departure_time}</h3>
              </div>
            ))
          ) : (
            <p>No se encontraron estaciones.</p>
          )}
        </div>
      ) : (
        <TrenesCirculacion /> // Componente para mostrar trenes en circulación
      )}
    </div> 
  );
}
