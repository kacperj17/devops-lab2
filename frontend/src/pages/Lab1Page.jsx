import { useEffect, useState } from "react";
import PersonProfile from "../components/PersonProfile";

function Lab1Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/generate-data?count=100') // adres backendu
      .then(response => response.json())
      .then(fetchedData => setData(fetchedData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div className="people-list">
      {data.map((person) => (
        <div className="person-card" key={person.id}>
          <PersonProfile person={person} />
        </div>
      ))}
    </div>
  );
}

export default Lab1Page;
