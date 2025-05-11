document.addEventListener("DOMContentLoaded", () => {
  const le200 = document.getElementById("le200");
  const le100 = document.getElementById("le100");
  const le50 = document.getElementById("le50");
  const le20 = document.getElementById("le20");
  const le10 = document.getElementById("le10");
  const le5 = document.getElementById("le5");
  const le1 = document.getElementById("le1");

  const txt200 = document.getElementById("txt200");
  const txt100 = document.getElementById("txt100");
  const txt50 = document.getElementById("txt50");
  const txt20 = document.getElementById("txt20");
  const txt10 = document.getElementById("txt10");
  const txt5 = document.getElementById("txt5");
  const txt1 = document.getElementById("txt1");

  const textFinalCash = document.getElementById("textFinalCash");
  const btnReset = document.getElementById("btnReset");

  const cashInputs = [le1, le5, le10, le20, le50, le100, le200];
  const cashTexts = [txt1, txt5, txt10, txt20, txt50, txt100, txt200];

  cashInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      cashCalculate(index);
    });
  });

  btnReset.addEventListener("click", clearData);

  function cashCalculate(index) {
    const denominations = [1,5,10,20,50,100,200] ;
    const rowValue = cashInputs[index].value * denominations[index];
    cashTexts[index].textContent = rowValue.toFixed(0);

    totalCash();
  }

  function totalCash() {
    let totalCashValue = 0;
    cashTexts.forEach((text) => {
      totalCashValue += parseInt(text.textContent);
    });
    textFinalCash.textContent = "Total Cash: " + totalCashValue;

   
  }

  function clearData() {
    cashInputs.forEach((input) => {
      input.value = "";
    });
    cashTexts.forEach((text) => {
      text.textContent = "0";
    });
    totalCash();
  }
});