   

//======     minus --    plus   button
const phone1MinusBtn = document.getElementById('phone1-minus');
const phone2MinusBtn = document.getElementById('phone2-minus');
const phone1PlusBtn = document.getElementById('phone1-plus');
const phone2PlusBtn = document.getElementById('phone2-plus');

phone1PlusBtn.addEventListener('click', function(){
         
   plusMethod('phone1-inputValue' , 'phone1-amount', 1219) ;

   TotalPrice() ;

})
phone2PlusBtn.addEventListener('click', function(){
         
         plusMethod('phone2-inputValue' , 'phone2-amount', 59) ;

         TotalPrice();

      })
phone1MinusBtn.addEventListener('click', function(){
   
   minusMethod('phone1-inputValue', 'phone1-amount', 1219 ) ;

   TotalPrice(); 

})
phone2MinusBtn.addEventListener('click', function(){
   
   minusMethod('phone2-inputValue', 'phone2-amount', 59 ) ;

   TotalPrice();

})

function plusMethod(inputID, amountID, initialPrice){
   const phone1Value = parseFloat(document.getElementById(inputID).value);
   const phone1ValueNumb = phone1Value + 1;

   document.getElementById(inputID).value = phone1ValueNumb ;

   const phone1PriceNumb = initialPrice * phone1ValueNumb ;

   document.getElementById(amountID).innerText = phone1PriceNumb ;


}

function minusMethod(inputID, amountID, initialPrice ){
   const phone1Value = parseFloat(document.getElementById(inputID).value);
   const phone1ValueNumb = phone1Value - 1;

   if(phone1ValueNumb<0){
      phone1ValueNumb = 0 ;
   }
  
   document.getElementById(inputID).value = phone1ValueNumb ;

   const phone1PriceNumb = initialPrice * phone1ValueNumb ;
   document.getElementById(amountID).innerText = phone1PriceNumb ;
}

function TotalPrice(){
   const phone1SumPrice = parseFloat(document.getElementById('phone1-amount').innerText);
   const phone2SumPrice = parseFloat(document.getElementById('phone2-amount').innerText);

   const subTotalAmount = phone1SumPrice + phone2SumPrice ;
   const totalAmount = subTotalAmount + 5 ;

   document.getElementById('subTotalPrice').innerText = subTotalAmount ;
   document.getElementById('totalPrice').innerText = totalAmount ;
}

