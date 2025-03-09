function submit() {
  let StudentName = document.getElementById("StudentName").value;
  let MathGrade = parseFloat(document.getElementById("MathGrade").value) || 0;
  let ScienceGrade =
    parseFloat(document.getElementById("ScienceGrade").value) || 0;
  let EnglishGrade =
    parseFloat(document.getElementById("EnglishGrade").value) || 0;

  let totalSum = MathGrade + ScienceGrade + EnglishGrade;
  let TotalAverage = totalSum / 3;

  let message = "";
  if (TotalAverage >= 75) {
    message = "Congratulations for passing the semester!";
  } else {
    message = "Sorry but you failed the semester!";
  }

  document.getElementById("result").innerHTML =
    "<br>Name: " +
    StudentName +
    "<br>Math: " +
    MathGrade.toFixed(1) +
    "<br>Science: " +
    ScienceGrade.toFixed(1) +
    "<br>English: " +
    EnglishGrade.toFixed(1) +
    "<br>Average: " +
    TotalAverage.toFixed(1) +
    "<br>" +
    message;
}
