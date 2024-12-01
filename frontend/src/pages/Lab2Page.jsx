import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PersonProfile from "../components/PersonProfile";

function Lab2Page() {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/generate-data?count=100') // adres backendu
      .then(response => response.json())
      .then(fetchedData => setData(fetchedData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      {!data.at(id - 1) ? (
        <h1>Nie znaleziono osoby o tym identyfikatorze - {id}</h1>
      ) : (
        <>
          <h1>Profil osoby UID: {id}</h1>
          <div className="people-list">
            <PersonProfile person={data.at(id - 1)}></PersonProfile>
          </div>
        </>
      )}
    </>
  );
}

export default Lab2Page;
