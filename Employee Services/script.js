function calculate() {
  let numOfYearsService = parseInt(
    document.getElementById("numOfYearsService").value
  );
  let AssignedOffice = document.getElementById("AssignedOffice").value;

  let count = "";
  if (
    AssignedOffice === "IT" ||
    AssignedOffice === "it" ||
    AssignedOffice === " It"
  ) {
    if (numOfYearsService >= 10) {
      count = "Salary is 10000";
    } else {
      count = "Salary is 5000";
    }
  }

  let count1 = "";
  if (
    AssignedOffice === "HR" ||
    AssignedOffice === "hr" ||
    AssignedOffice === "Hr"
  ) {
    if (numOfYearsService >= 10) {
      count1 = "Salary is 15000";
    } else {
      count1 = "Salary is 75000";
    }
  }

  let count2 = "";
  if (
    AssignedOffice === "Acct" ||
    AssignedOffice === "ACCT" ||
    AssignedOffice === "acct"
  ) {
    if (numOfYearsService >= 10) {
      count2 = "Salary is 12000";
    } else {
      count2 = "Salary is 6000";
    }
  }

  let resultText = count + "<br>" + count1 + "<br>" + count2;
  document.getElementById("result").innerHTML = resultText;
}
