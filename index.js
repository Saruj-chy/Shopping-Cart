//======     minus --    plus   button
const phone1MinusBtn = document.getElementById('phone1-minus');
const phone2MinusBtn = document.getElementById('phone2-minus');
const phone1PlusBtn = document.getElementById('phone1-plus');
const phone2PlusBtn = document.getElementById('phone2-plus');

const phone1_Price = parseFloat(document.getElementById('phone1-amount').innerText);
const phone2_Price = parseFloat(document.getElementById('phone2-amount').innerText);

var price;

phone1PlusBtn.addEventListener('click', function () {

   plusMethod('phone1-inputValue', 'phone1-amount', phone1_Price);

   TotalPrice();

})
phone2PlusBtn.addEventListener('click', function () {

   plusMethod('phone2-inputValue', 'phone2-amount', phone2_Price);

   TotalPrice();

})
phone1MinusBtn.addEventListener('click', function () {

   minusMethod('phone1-inputValue', 'phone1-amount', phone1_Price);

   TotalPrice();

})
phone2MinusBtn.addEventListener('click', function () {

   minusMethod('phone2-inputValue', 'phone2-amount', phone2_Price);

   TotalPrice();

})

function plusMethod(inputID, amountID, initial) {
   var phone1Value = parseFloat(document.getElementById(inputID).value);
   var phone1SumPrice = parseFloat(document.getElementById(amountID).innerText);

   var initialPrice;
   if (phone1Value == 0) {
      initialPrice = initial;
   }
   else {
      initialPrice = phone1SumPrice / phone1Value;
   }

   const phone1ValueNumb = phone1Value + 1;

   document.getElementById(inputID).value = phone1ValueNumb;

   const phone1PriceNumb = initialPrice * phone1ValueNumb;

   document.getElementById(amountID).innerText = phone1PriceNumb;


}

function minusMethod(inputID, amountID, initialPrice) {
   const phone1Value = parseFloat(document.getElementById(inputID).value);
   var phone1ValueNumb = phone1Value - 1;

   if (phone1ValueNumb < 0) {
      phone1ValueNumb = 0;
   }
   else if (phone1ValueNumb == 0) {
      price = initialPrice;
      console.log(price);
      console.log(initialPrice);
   }

   document.getElementById(inputID).value = phone1ValueNumb;

   const phone1PriceNumb = initialPrice * phone1ValueNumb;
   document.getElementById(amountID).innerText = phone1PriceNumb;
}

function TotalPrice() {
   const phone1SumPrice = parseFloat(document.getElementById('phone1-amount').innerText);
   const phone2SumPrice = parseFloat(document.getElementById('phone2-amount').innerText);

   const subTotalAmount = phone1SumPrice + phone2SumPrice;
   const totalAmount = subTotalAmount + 5;

   document.getElementById('subTotalPrice').innerText = subTotalAmount;
   document.getElementById('totalPrice').innerText = totalAmount;
}

function Handle1() {
   Handle('phone1-inputValue', 'phone1-amount', phone1_Price);
}
function Handle2() {
   Handle('phone2-inputValue', 'phone2-amount', phone2_Price);
}


function Handle(inputID, amountID, Price) {
   const textInput = parseFloat(document.getElementById(inputID).value);

   if (document.getElementById(inputID).value == "") {
      document.getElementById(inputID).value = 0;
      document.getElementById(amountID).innerText = 0;
   }
   else {
      const totalAmount = textInput * Price;
      document.getElementById(amountID).innerText = totalAmount;
   }
   TotalPrice();
}

