function generatePayslip() {
  let employeeName = document.getElementById("employeeName").value;
  let workhours = parseInt(document.getElementById("workhours").value) || 0;
  let sss = parseFloat(document.getElementById("sss").value) || 0;
  let philhealth = parseFloat(document.getElementById("philhealth").value) || 0;
  let housingloan =
    parseFloat(document.getElementById("housingloan").value) || 0;
  let ratePerHour = 500;

  let grossPay = ratePerHour * workhours;
  let tax = 0.1 * grossPay;
  let deductions = sss + philhealth + housingloan + tax;
  let netSalaryPay = grossPay - deductions;

  document.getElementById("payslip").innerHTML =
    "<br>========PAYSLIP========" +
    "<br>=====EMPLOYEE INFO=====" +
    "<br>Employee name: " +
    employeeName +
    "<br>Rendered hours:" +
    workhours +
    "<br>Rate per hour:" +
    ratePerHour +
    "<br>Gross Salary:" +
    grossPay.toFixed(1) +
    "<br>========DEDUCTIONS========" +
    "<br>SSS:" +
    sss +
    "<br>Philhealth:" +
    philhealth +
    "<br>Housing: " +
    housingloan +
    "<br>Tax:" +
    tax +
    "<br>Total deductions: " +
    deductions +
    "<br></br>" +
    "<br>Net Salary: PHP" +
    netSalaryPay.toFixed(1);
}
