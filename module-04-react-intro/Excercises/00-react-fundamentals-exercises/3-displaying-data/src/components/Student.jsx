const Student = ({ picture, firstName, lastName, age, course, city }) => {
  return (
    <div className="student-card">
      <img src={picture} alt={firstName + " " + lastName} />
      <div>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Course:</strong> {course}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
      </div>
    </div>
  );
};

export default Student;
