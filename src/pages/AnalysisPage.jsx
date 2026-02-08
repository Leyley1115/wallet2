import Calendar from "../components/Calendar/Calendar";
import BarChart from "../components/BarChart/BarChart";
import { useState } from "react";

const AnalysisPage = () => {
  const token = localStorage.getItem('token');
  const [period, setPeriod] = useState(null);

  return (
    <>
      <Calendar token={token} onLoad={setPeriod} />
      <BarChart period={period}/>
    </>
  );
};

export default AnalysisPage;
