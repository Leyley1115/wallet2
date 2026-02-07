import Calendar from "../components/Calendar/Calendar";

const AnalysisPage = () => {
  const token = localStorage.getItem('token');

  function handleLoad(data) {
    console.log("PERIOD TRANSACTIONS:", data);
  }

  return (
    <>
      <Calendar token={token} onLoad={handleLoad} />
    </>
  );
};

export default AnalysisPage;
