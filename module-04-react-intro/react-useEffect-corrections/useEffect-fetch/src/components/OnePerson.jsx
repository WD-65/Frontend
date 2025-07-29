
function OnePerson({name, uid}) {
  return (
    <li
      key={uid}
      className="bg-white p-4 rounded shadow text-center capitalize"
    >
      <span className="font-semibold text-gray-800">{name}</span>
    </li>
  );
}

export default OnePerson;
