function addItem() {
  var startDateField = document.getElementById("startDate");
  var endDateField = document.getElementById("endDate");
  var subjectField = document.getElementById("subject");
  var homeworkField = document.getElementById("homework");
  var startDateValue = startDateField.value;
  var endDateValue = endDateField.value;
  var subjectValue = subjectField.value;
  var homeworkValue = homeworkField.value;
  var currentTime = new Date().toLocaleTimeString();
  
  if (startDateValue !== "" && endDateValue !== "" && subjectValue !== "" && homeworkValue !== "") {
    var outputTable = document.getElementById("outputTable").getElementsByTagName('tbody')[0];
    var newRow = outputTable.insertRow(outputTable.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.textContent = subjectValue;
    cell2.textContent = currentTime;
    cell3.textContent = homeworkValue;
    startDateField.value = ""; // 清空起始时间输入框
    endDateField.value = ""; // 清空结束时间输入框
    subjectField.value = ""; // 清空科目输入框
    homeworkField.value = ""; // 清空作业输入框
  }
}

function clearFields() {
  var startDateField = document.getElementById("startDate");
  var endDateField = document.getElementById("endDate");
  var subjectField = document.getElementById("subject");
  var homeworkField = document.getElementById("homework");
  
  startDateField.value = ""; // 清空起始时间输入框
  endDateField.value = ""; // 清空结束时间输入框
  subjectField.value = ""; // 清空科目输入框
  homeworkField.value = ""; // 清空作业输入框
}
