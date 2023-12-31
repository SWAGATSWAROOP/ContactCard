import { useState, useEffect } from "react";
import Axios from "axios";
import MyCard from "./components/MyCard";

function App() {
  const [details, setDetails] = useState({});
  const fetchDeatils = async () => {
    try {
      const { data } = await Axios.get("https://randomuser.me/api/");
      console.log("Response is: ", data);
      setDetails(data.results[0]);
    } catch (err) {
      console.log("Error in fetching data :", err);
    }
  };

  useEffect(() => fetchDeatils, []);
  return (
    <div className="w-lvw h-lvh flex items-center justify-center">
      <MyCard details={details}></MyCard>
    </div>
  );
}

export default App;
