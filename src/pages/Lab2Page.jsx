import { useParams } from "react-router-dom";

import { data } from "../data/module-data";
import PersonProfile from "../components/PersonProfile";

function Lab2Page() {
  const { id } = useParams();

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
