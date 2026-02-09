function calculateEMI() {
  const amount = parseFloat(document.getElementById("loanAmount").value);
  const rate = parseFloat(document.getElementById("interestRate").value);
  let tenure = parseFloat(document.getElementById("tenure").value);
  const tenureType = document.getElementById("tenureType").value;

  if (!amount || !rate || !tenure) {
    alert("Please enter all values correctly");
    return;
  }

  if (tenureType === "years") {
    tenure = tenure * 12;
  }

  const monthlyRate = rate / 12 / 100;

  const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
              (Math.pow(1 + monthlyRate, tenure) - 1);

  const totalPayable = emi * tenure;
  const totalInterest = totalPayable - amount;

  document.getElementById("emi").innerText = "₹" + emi.toFixed(2);
  document.getElementById("interest").innerText = "₹" + totalInterest.toFixed(2);
  document.getElementById("total").innerText = "₹" + totalPayable.toFixed(2);
}
