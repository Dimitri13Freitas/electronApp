import React from "react";
import styles from "./Global.module.css";
import { read, utils } from "xlsx";

function App() {
  const [data, setData] = React.useState(null);

  async function fetchData() {
    const file = await fetch("./base.xlsx");
    const buff = await file.arrayBuffer();
    const data = read(buff, { type: "buffer" });
    const sheet = data.Sheets[data.SheetNames[0]];
    const json = utils.sheet_to_json(sheet);
    console.log(json);
    setData(json);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.teste}>
        {data && data.map((e) => <p key={e.Documento}>{e.Documento}</p>)}
      </div>
    </>
  );
}

export default App;

