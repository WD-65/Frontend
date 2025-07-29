import OnePerson from "./OnePerson";

function People({ people }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-4">
      {people.map((person) => (
        <OnePerson uid={person.uid} name={person.name} />
      ))}
    </ul>
  );
}

export default People;
