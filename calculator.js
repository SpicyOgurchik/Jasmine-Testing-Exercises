window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const am = document.getElementById("loan-amount");
  const ye = document.getElementById("loan-years");
  const ra = document.getElementById("loan-rate");
  const values = {amount: 50000, years : 5, rate: 5};
  am.value = values.amount;
  ye.value = values.years;
  ra.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currVal = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currVal));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const i = (values.rate / 100) / 12;
  const n = values.years * 12;
  let payment = ((i * values.amount) / (1 - Math.pow((1 + i), -n))).toFixed(2);
  return payment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const month = document.getElementById("monthly-payment");
  month.innerText = monthly;
}
