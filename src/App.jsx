import React from "react";
import styles from "./App.module.css";
import * as XLSX from "xlsx";

function App() {
  const [data, setData] = React.useState([]);

  async function fetchData() {
    const promiss = await fetch("base.xlsx");
    const buff = await promiss.arrayBuffer();
    const workbook = XLSX.readFile(buff, { type: "buffer" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    setData(rows);
    console.log(rows);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.textCenter}>
        <tbody>
          {data &&
            data.map((row, i) => {
              if (i === 0) {
                return (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <th key={j}>{cell}</th>
                    ))}
                  </tr>
                );
              } else {
                return (
                  <tr key={i}>
                    <span>
                      <input type="checkbox" name="" id="" />
                    </span>
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
  );
}

export default App;

