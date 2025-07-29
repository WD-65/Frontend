import Grade from "./Grade";

const Student = ({
  picture,
  firstName,
  lastName,
  age,
  course,
  city,
  gpa,
  graduate,
}) => {
  return (
    <div className="student-card">
      <img src={picture} alt={firstName + " " + lastName} />
      <div className="student-card-body">
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
        <p>
          <strong>Status:</strong> {graduate ? "Graduate" : "Student"}
        </p>
        <Grade gpa={gpa} />
      </div>
    </div>
  );
};

export default Student;

// Alternative:

// const Student = (studentData) => {
//   return (
//     <div className="student-card">
//       <img
//         src={studentData.picture}
//         alt={`${studentData.firstName} ${studentData.lastName}`}
//       />
//       <div className="student-card-body">
//         <h2>
//           {studentData.firstName} {studentData.lastName}
//         </h2>
//         <p>
//           <strong>Age:</strong> {studentData.age}
//         </p>
//         <p>
//           <strong>Course:</strong> {studentData.course}
//         </p>
//         <p>
//           <strong>City:</strong> {studentData.city}
//         </p>
//         <p>
//           <strong>Status:</strong> {studentData.graduate ? "Graduate" : "Student"}
//         </p>
//         <Grade gpa={studentData.gpa} />
//       </div>
//     </div>
//   );
// };
