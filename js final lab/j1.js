let data;

fetch('students.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    const studentSelect = document.getElementById("student-select");
    data.students.forEach(student => {
      const option = document.createElement("option");
      option.text = student.name;
      option.value = student.id;
      studentSelect.add(option);
    });
  });


document.getElementById("send-button").addEventListener("click", () => {
  const studentSelect = document.getElementById("student-select");
  const selectedId = studentSelect.value;
  const studentDataDiv = document.getElementById("student-data");
  const selectedStudent = data.students.find(student => student.id === Number(selectedId));
  studentDataDiv.innerText = `Name: ${selectedStudent.name}\n ID: ${selectedStudent.id}\n age: ${selectedStudent.age} \n major: ${selectedStudent.major}`;
});

document.getElementById("clear-button").addEventListener("click", () => {
  const studentDataDiv = document.getElementById("student-data");
  studentDataDiv.innerText = "";
});
