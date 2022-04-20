import "./App.css";
import Chart from "./component/Chart";
import Logo from "./component/Logo";
import Tab from "./component/Tab";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();

  const url =
    "https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/110?county=%E8%87%BA%E5%8C%97%E5%B8%82";

  const fetchData = async () => {
    let request = await axios.get(url);
    setData(request.data.responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <Logo />
      <Tab search={setSearch} data={data} />
      <Chart search={search} data={data} />
    </div>
  );
}

export default App;
