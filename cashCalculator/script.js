document.addEventListener("DOMContentLoaded", () => {
  const le1 = document.getElementById("le1");
  const le5 = document.getElementById("le5");
  const le10 = document.getElementById("le10");
  const le20 = document.getElementById("le20");
  const le50 = document.getElementById("le50");
  const le100 = document.getElementById("le100");
  const le200 = document.getElementById("le200");

  const txt1 = document.getElementById("txt1");
  const txt5 = document.getElementById("txt5");
  const txt10 = document.getElementById("txt10");
  const txt20 = document.getElementById("txt20");
  const txt50 = document.getElementById("txt50");
  const txt100 = document.getElementById("txt100");
  const txt200 = document.getElementById("txt200");

  const textFinalCash = document.getElementById("textFinalCash");
  const textFinalCashWords = document.getElementById("textFinalCashWords");

  const btnReset = document.getElementById("btnReset");

  const cashInputs = [le1, le5, le10, le20, le50, le100, le200];
  const cashTexts = [txt1, txt5, txt10, txt20, txt50, txt100, txt200];


  cashInputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        cashCalculate(index);
      });
    });

  function cashCalculate(index){

    const denominations = [1,5,10,20,50,100,200];
    const rowValue =cashInputs[index].value * denominations[index];

    cashTexts[index].textContent = rowValue.toFixed(0);
    totalCash();
  }

  function totalCash(){
    let totalCashValue=0;
    cashTexts.forEach((text)=>{
        totalCashValue+=parseInt(text.textContent);
    })

    textFinalCash.textContent="Total Cash: "+ totalCashValue;
  }

    btnReset.addEventListener('click', clearData);

  function clearData(){
    cashInputs.forEach((input)=>{
        input.value="";
    })
    cashTexts.forEach((text)=>{
        text.textContent="";
    })
  }

  cashInputs.forEach(input=>{
    input.addEventListener('input',()=>{
        const value = parseInt(input.value,10);
        if(isNaN(value) || value<0){
            input.value=""
        }
    })
  })
});
