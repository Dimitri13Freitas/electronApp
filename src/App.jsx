import React from "react";
import styles from "./App.module.css";
import * as XLSX from "xlsx";
import { Select } from "./components/Select";

function App() {
  const [data, setData] = React.useState([]);
  const [filtro, setFiltro] = React.useState(null);

  async function fetchData() {
    const promiss = await fetch("base.xlsx");
    const buff = await promiss.arrayBuffer();
    const workbook = XLSX.readFile(buff, { type: "buffer" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    setData(rows);
    console.log(data);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  function handleChange({ target }) {
    setData((e) => {
      e.filter((e) => e === target.value);
    });
  }

  return (
    <>
      <h3>Filtros</h3>
      <div className={styles.container}>
        <table className={styles.textCenter}>
          <tbody>
            {data &&
              data.map((row, i) => {
                if (i === 0) {
                  return (
                    <tr key={i}>
                      <th className={styles.borderNone} key={i + 3000}></th>
                      {row.map((cell, j) => (
                        <th key={j}>{cell}</th>
                      ))}
                    </tr>
                  );
                } else {
                  return (
                    <tr key={i}>
                      <input type="checkbox" />
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

