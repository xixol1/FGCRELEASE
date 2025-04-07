// Importa los hooks necesarios de React
import { useEffect, useState } from "react";

// Define un tipo para los objetos de tren que vendrán del API
type Tren = {
  lin: string;           // Línea del tren (ej: S1, L8, R6, etc.)
  tipus_unitat: string;  // Tipo de unidad 
};

export default function TrenesEnCirculacion() {
  // Estados para el total de trenes y para cada línea por separado
  const [totalTrenes, setTotalTrenes] = useState(0);
  const [trenesS1, setTrenesS1] = useState(0);
  const [trenesS2, setTrenesS2] = useState(0);
  const [trenesL6, setTrenesL6] = useState(0);
  const [trenesL7, setTrenesL7] = useState(0);
  const [trenesL8, setTrenesL8] = useState(0);
  const [trenesL12, setTrenesL12] = useState(0);
  const [trenesS3, setTrenesS3] = useState(0);
  const [trenesS4, setTrenesS4] = useState(0);
  const [trenesS8, setTrenesS8] = useState(0);
  const [trenesS9, setTrenesS9] = useState(0);
  const [trenesR6, setTrenesR6] = useState(0);
  const [trenesR5, setTrenesR5] = useState(0);
  const [trenesR50, setTrenesR50] = useState(0);
  const [trenesR60, setTrenesR60] = useState(0);

  // useEffect que se ejecuta una sola vez al montar el componente
  useEffect(() => {
    fetch("https://dadesobertes.fgc.cat/api/explore/v2.1/catalog/datasets/posicionament-dels-trens/records?select=lin%2C%20tipus_unitat&limit=100")
      .then((response) => response.json())
      .then((data) => {
        // Obtenemos los datos del array
        const trenes: Tren[] = data.results || [];
        setTotalTrenes(trenes.length); // Actualiza el número total de trenes

        // Contadores individuales por línea
        let s1 = 0,
          s2 = 0,
          s3 = 0,
          l6 = 0,
          l7 = 0,
          l8 = 0,
          l12 = 0,
          s4 = 0,
          s8 = 0,
          s9 = 0,
          r6 = 0,
          r5 = 0,
          r50 = 0,
          r60 = 0;

        // Recorremos todos los trenes y contamos cuántos hay por línea
        trenes.forEach((tren) => {
          if (tren.lin === "S1") s1++;
          if (tren.lin === "S2") s2++;
          if (tren.lin === "S3") s3++;
          if (tren.lin === "L6") l6++;
          if (tren.lin === "L7") l7++;
          if (tren.lin === "L8") l8++;
          if (tren.lin === "L12") l12++;
          if (tren.lin === "S4") s4++;
          if (tren.lin === "S8") s8++;
          if (tren.lin === "S9") s9++;
          if (tren.lin === "R6") r6++;
          if (tren.lin === "R5") r5++;
          if (tren.lin === "R50") r50++;
          if (tren.lin === "R60") r60++;
        });

        // Actualiza los estados con los valores contados
        setTrenesS1(s1);
        setTrenesS2(s2);
        setTrenesS3(s3);
        setTrenesL6(l6);
        setTrenesL7(l7);
        setTrenesL8(l8);
        setTrenesL12(l12);
        setTrenesS4(s4);
        setTrenesS8(s8);
        setTrenesS9(s9);
        setTrenesR6(r6);
        setTrenesR5(r5);
        setTrenesR50(r50);
        setTrenesR60(r60);
      });
  }, []); // Solo se ejecuta una vez al cargar

  // Renderizado del componente
  return (
    <div className="trenes-container">
      <h1 className="total">Total trenes en circulación: {totalTrenes}</h1>

      <div className="container">
        {/* Cada bloque representa una línea con su imagen y contador */}
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/S1_barcelona.svg/1024px-S1_barcelona.svg.png" alt="S1" className="cX"/>
          <h3>Trens en circulació: {trenesS1}</h3>
        </div>
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/S2_barcelona.svg/1024px-S2_barcelona.svg.png" alt="S2" className="cX"/>
          <h3>Trens en circulació: {trenesS2}</h3>
        </div>
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/S3_barcelona.svg/1024px-S3_barcelona.svg.png" alt="S3" className="cX"/>
          <h3>Trens en circulació: {trenesS3}</h3>
        </div>
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/S4_barcelona.svg/2048px-S4_barcelona.svg.png" alt="S4" className="cX"/>
          <h3>Trens en circulació: {trenesS4}</h3>
        </div>
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/S8_barcelona.svg/1200px-S8_barcelona.svg.png" alt="S8" className="cX"/>
          <h3>Trens en circulació: {trenesS8}</h3>
        </div>
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/S9_barcelona.svg/1200px-S9_barcelona.svg.png" alt="S9" className="cX"/>
          <h3>Trens en circulació: {trenesS9}</h3>
        </div>
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/L6_barcelona.svg/2048px-L6_barcelona.svg.png" alt="L6" className="cX"/>
          <h3>Trens en circulació: {trenesL6}</h3>
        </div>
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/L7_barcelona.svg/1024px-L7_barcelona.svg.png" alt="L7" className="cX"/>
          <h3>Trens en circulació: {trenesL7}</h3>
        </div>
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/L8_barcelona.svg/2048px-L8_barcelona.svg.png" alt="L8" className="cX"/>
          <h3>Trens en circulació: {trenesL8}</h3>
        </div>
        <div className="grid">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMybkUD9wkSHFqjSXwuhW_WBturJszvk3cA&s" alt="L12" className="cX"/>
          <h3>Trens en circulació: {trenesL12}</h3>
        </div>
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/R6_barcelona.svg/1024px-R6_barcelona.svg.png" alt="R6" className="cX"/>
          <h3>Trens en circulació: {trenesR6}</h3>
        </div>
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/R5_barcelona.svg/120px-R5_barcelona.svg.png" alt="R5" className="cX"/>
          <h3>Trens en circulació: {trenesR5}</h3>
        </div>
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/R60_barcelona.svg/2048px-R60_barcelona.svg.png" alt="R60" className="cX"/>
          <h3>Trens en circulació: {trenesR60}</h3>
        </div>
        <div className="grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/R50_barcelona.svg/2048px-R50_barcelona.svg.png" alt="R50" className="cX"/>
          <h3>Trens en circulació: {trenesR50}</h3>
        </div>
      </div>
    </div>
  );
}
