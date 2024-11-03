import { data } from "../data/module-data";
import PersonProfile from "../components/PersonProfile";

function Lab1Page() {
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
