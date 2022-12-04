
 const benefits=[];
function netSalary(basicSalary,benefits){

}
//Get HTML elements by Id
const form = document.getElementById("netSalary");
const input = document.getElementById("grossPay");
const message = document.getElementById("grossPay");
form.addEventListener("submit", (event) => {
  //add event
  event.preventDefault(); //prevents page reloaing
  validateInput(input);
});

function validateInput(input) {
  console.log(input.value);
  let grossPay = input.value;
  const NSSF = 500;

  //Conditional statemnts
  {
    if (grossPay < 24001) {
      payee = grossPay * 0.1;
      console.log(` tax is ksh ${payee}`);
    } else if (grossPay < 32334) {
      payee = grossPay * 0.25;
      console.log(` tax is ksh ${payee}`);
    } else if (grossPay >= 32334) {
      payee = grossPay * 0.38;
      console.log(` tax is ksh ${payee}`);
    } else console.log("input valid number");

    //NHIF
    if (grossPay < 12000) {
      NHIF = 150;
      console.log(` NHIF is ksh ${NHIF}`);
    } else if (grossPay >= 12000 && grossPay < 20000) {
      NHIF = 400;
      console.log(` NHIF is ksh ${NHIF}`);
    } else if (grossPay >= 20000 && grossPay < 50000) {
      NHIF = 600;
      console.log(` NHIF is ksh ${NHIF}`);
    } else NHIF = 950;
    console.log(` NHIF is ksh ${NHIF}`);
  }
  deductions = NHIF + payee + NSSF;
  console.log(` NSSF is ksh:${NSSF} `);
  console.log(" net salary is ksh", (netPay = grossPay - deductions));
}



