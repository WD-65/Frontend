import Grade from "./Grade";

const Student = ({
  picture,
  firstName,
  lastName,
  age,
  course,
  city,
  graduate,
  gpa,
}) => {
  return (
    <div className="student-card">
      <img
        src={picture}
        alt={`${firstName} ${lastName}`}
        className="student-picture"
      />
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
      <Grade gpa={gpa} />
      <p>
        <strong>Status:</strong> {graduate ? "Graduate" : "Student"}
      </p>
    </div>
  );
};

export default Student;

// Alternative:

// const Student = ({ studentData }) => {
//   return (
//     <div className="student-card">
//       <img
//         src={studentData.picture}
//         alt={`${studentData.firstName} ${studentData.lastName}`}
//         className="student-picture"
//       />
//       <h2>
//         {studentData.firstName} {studentData.lastName}
//       </h2>
//       <p>
//         <strong>Age:</strong> {studentData.age}
//       </p>
//       <p>
//         <strong>Course:</strong> {studentData.course}
//       </p>
//       <p>
//         <strong>City:</strong> {studentData.city}
//       </p>
//       <Grade gpa={studentData.gpa} />
//       <p>
//         <strong>Status:</strong> {studentData.graduate ? "Graduate" : "Student"}
//       </p>
//     </div>
//   );
// };
