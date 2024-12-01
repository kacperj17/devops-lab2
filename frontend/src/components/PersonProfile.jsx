function PersonProfile({ person }) {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{person.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">UID: {person.id}</h6>
          <p className="card-text">
            <span>Birthdate: {person.birth}</span><br />
            <span>Eyes color: {person.eyes}</span><br />
          </p>
        </div>
      </div>
    </>
  );
}

export default PersonProfile;
