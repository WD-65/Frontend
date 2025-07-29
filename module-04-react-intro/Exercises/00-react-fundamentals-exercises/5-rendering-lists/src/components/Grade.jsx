const Grade = ({ gpa }) => {
  const scale = [
    { min: 97, grade: "A+" },
    { min: 93, grade: "A" },
    { min: 90, grade: "A-" },
    { min: 87, grade: "B+" },
    { min: 83, grade: "B" },
    { min: 80, grade: "B-" },
    { min: 77, grade: "C+" },
    { min: 73, grade: "C" },
    { min: 70, grade: "C-" },
    { min: 67, grade: "D+" },
    { min: 63, grade: "D" },
    { min: 60, grade: "D-" },
  ];

  const match = scale.find(({ min }) => gpa >= min);
  return (
    <p>
      <strong>Grade:</strong> {match ? match.grade : "F"}
    </p>
  );
};

export default Grade;

// Alternative:

// const calcGrade = (gpa) => {
//   if (gpa >= 97) {
//     return "A+";
//   } else if (gpa >= 93) {
//     return "A";
//   } else if (gpa >= 90) {
//     return "A-";
//   } else if (gpa >= 87) {
//     return "B+";
//   } else if (gpa >= 83) {
//     return "B";
//   } else if (gpa >= 80) {
//     return "B-";
//   } else if (gpa >= 77) {
//     return "C+";
//   } else if (gpa >= 73) {
//     return "C";
//   } else if (gpa >= 70) {
//     return "C-";
//   } else if (gpa >= 67) {
//     return "D+";
//   } else if (gpa >= 63) {
//     return "D";
//   } else if (gpa >= 60) {
//     return "D-";
//   } else {
//     return "F";
//   }
// };

// const Grade = ({ gpa }) => {
//   const myGrade = calcGrade(gpa);
//   return (
//     <p>
//       <strong>Grade:</strong> {myGrade}
//     </p>
//   );
// };
