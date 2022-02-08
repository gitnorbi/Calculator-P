//This is a variable for:
//Holding the Operation this variable is gonna be shown on the screen
let numbersAndOperators="";
// checking the operatiors, so the user can't use more then two next to each other
//one is for the operator one for checking if the number is negative or positive
let isThereAnyOperationSign=1;
//Checking how many opening and closing brackets there are, couse the user wont
//be able to use more closing brackets then opening ones
//and also if there is more opening bracket when the user click the "="button to calculate result
//the program gonna generate closing brackets for the opertion
let howManyOpeningBracket=0;
let howManyClosingBracket=0;

let isThereADotInNumber=false;
//This is for the return function, so after we delete a character and we want to return it
//this variable holds the numbersAndOperators value before deleting
//with the delete function it is not changing
//but always uptaded when adding a number, bracket or operator 
let saveNumbersAndOperators="";
//This holds the isThereAnyOperationSign values before deleting
// for the return function
let saveOperatorsInArray=[];
//These are holding the howManyOpeningBracket, howManyClosingBracket values
//before deleting, for the return function
let saveOpeningBracketcsInArray=[];
let saveClosingBracketcsInArray=[];

let saveIsThereADotInNumberInArray=[]

// this variable helps to to decide if we clicked deleteAll button
// and its gonna be important for the return function 
let didSomeOnePushedDeleteAll=false;

//if we clicked deleteAll these variables gonna hold the values before deleteAll
//for the reurn function
let saveNumbersAndOperatorsBeforeDeleteAll="";
let saveOperatorsInArrayBeforeDelete=[];
let saveHowManyOpeningBracketBeforeDelete=[];
let saveHowManyClosingBracketBeforeDelete=[];
let saveIsThereADotInNumberInArrayBeforeDeleteAll=[];

let forResultnumbersAndOperatorsWhithoutDoublePlus;
let forResultnumbersAndOperatorsWhithoutDoubleMinusOrPlus;
let howLongNumbersAndOperatorsBeforeDeleteAll;











//adding eventlistener to numberButtons
document.querySelectorAll('.numberButton').forEach(item => {
    item.addEventListener('click', event => {
    

      let lastChar=numbersAndOperators[numbersAndOperators.length-1];
     
      if(lastChar!=")"){
      //This is where we cut the unsused chars from saveOperatorsInArray
      // when click on a number
      //the slice method is used couse after deleting chars from numbersAndOperators
      //whit the delete function saveOperatorsInArray is not updated and here
      //where we update it, we should cut the not used chars
        saveOperatorsInArray=saveOperatorsInArray.slice(0,numbersAndOperators.length);
      // we update the varibale, we add to it the button's textcontent
        numbersAndOperators+=event.target.textContent;
        //after changing the numbersAndOperators whe update the saveNumbersAndOperators
        // cutting the redundant chars from saveNumbersAndOperators should be before
        //updating it so we wont add chars in wrong order and then cut them away
      
      saveNumbersAndOperators=numbersAndOperators;
      //this is where we output the operation to the screen
      document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
      

      isThereAnyOperationSign=0;
      //this is where we save if there were any operation sign used in the end for return
      saveOperatorsInArray.push(isThereAnyOperationSign);
      saveOpeningBracketcsInArray.push(howManyOpeningBracket);
      saveClosingBracketcsInArray.push(howManyClosingBracket);
      saveIsThereADotInNumberInArray.push(isThereADotInNumber);
      
      didSomeOnePushedDeleteAll=false;

    
      }

    })
  })
  // end adding eventlistener to numberButtons



 //adding eventlistener to multDivideButton
 document.querySelectorAll('.multDivideButton').forEach(item => {
  item.addEventListener('click', event => {
    
    let lastChar=numbersAndOperators[numbersAndOperators.length-1];
    let isLastANumber=isNaN(lastChar) ? false : true;

      if(lastChar!=undefined && isLastANumber===true || lastChar===")"){
        
      numbersAndOperators+=event.target.textContent;
      saveNumbersAndOperators=numbersAndOperators;
      saveOperatorsInArray=saveOperatorsInArray.slice(0,numbersAndOperators.length-1);
      document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;

      isThereAnyOperationSign=1;
      saveOperatorsInArray.push(isThereAnyOperationSign);
      saveOpeningBracketcsInArray.push(howManyOpeningBracket);
      saveClosingBracketcsInArray.push(howManyClosingBracket);
      saveIsThereADotInNumberInArray.push(isThereADotInNumber);
      didSomeOnePushedDeleteAll=false;
      //after an operation sign a new number begins so i can write . to a number again
      isThereADotInNumber=false;
     
  }
  })
})
//adding eventlistener to multDivideButton end



//adding eventlistener to plusOrMinusButton
document.querySelectorAll('.plusAndMinusButton').forEach(item => {
  item.addEventListener('click', event => {
    let lastChar=numbersAndOperators[numbersAndOperators.length-1];
    if(isThereAnyOperationSign<2 && lastChar!="." ){
      numbersAndOperators+=event.target.textContent;
      saveNumbersAndOperators=numbersAndOperators;
      saveOperatorsInArray=saveOperatorsInArray.slice(0,numbersAndOperators.length-1);
      isThereAnyOperationSign+=1;
      saveOperatorsInArray.push(isThereAnyOperationSign);
      saveOpeningBracketcsInArray.push(howManyOpeningBracket);
      saveClosingBracketcsInArray.push(howManyClosingBracket);
      saveIsThereADotInNumberInArray.push(isThereADotInNumber);
      document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
      didSomeOnePushedDeleteAll=false;
//after an operation sign a new number begins so i can write . to a number again
      isThereADotInNumber=false;
      
  }

  })
})
// end adding eventlistener to plusOrMinusButton

//adding eventlistener to openingBracketButton
document.querySelectorAll('.openingBracketButton').forEach(item => {
  item.addEventListener('click', event => {

    let lastChar=numbersAndOperators[numbersAndOperators.length-1];
    let isLastANumber=isNaN(lastChar) ? false : true;

    if(lastChar!=")" && isLastANumber==false && lastChar!="." ){

      saveOperatorsInArray=saveOperatorsInArray.slice(0,numbersAndOperators.length);
      numbersAndOperators+=event.target.textContent;
      saveNumbersAndOperators=numbersAndOperators;
      isThereAnyOperationSign=1;
      howManyOpeningBracket+=1;
      saveOperatorsInArray.push(isThereAnyOperationSign);
      saveOpeningBracketcsInArray.push(howManyOpeningBracket);
      saveClosingBracketcsInArray.push(howManyClosingBracket);
      saveIsThereADotInNumberInArray.push(isThereADotInNumber);
      document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
      didSomeOnePushedDeleteAll=false;

    }
  })
})
//end adding eventlistener to openingBracketButton

//adding eventlistener to endBracketButton
document.querySelectorAll('.endBracketButton').forEach(item => {
  item.addEventListener('click', event => {
    let lastChar=numbersAndOperators[numbersAndOperators.length-1];

    

    
    if(howManyClosingBracket<howManyOpeningBracket && lastChar!="+" &&lastChar!="-" &&lastChar!="*" && lastChar!="/" && lastChar!="(") {
      saveOperatorsInArray=saveOperatorsInArray.slice(0,numbersAndOperators.length);
      numbersAndOperators+=event.target.textContent;
      saveNumbersAndOperators=numbersAndOperators;
      isThereAnyOperationSign=0;
      howManyClosingBracket+=1;
      saveOperatorsInArray.push(isThereAnyOperationSign);
      saveClosingBracketcsInArray.push(howManyClosingBracket);
      saveOpeningBracketcsInArray.push(howManyOpeningBracket);
      saveIsThereADotInNumberInArray.push(isThereADotInNumber);
      document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
      didSomeOnePushedDeleteAll=false;

  }
  
  })
})
// end adding eventlistener to endBracketButton
 

    


// adding eventlistener to dot
document.querySelector('.dot').addEventListener("click",(event)=>{

  let lastChar=numbersAndOperators[numbersAndOperators.length-1];
  let isLastANumber=isNaN(lastChar) ? false : true;

  if(isThereADotInNumber==false && isLastANumber){
    numbersAndOperators+=event.target.textContent;
    saveNumbersAndOperators=numbersAndOperators;
    document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
    isThereADotInNumber=true;

    saveOperatorsInArray.push(isThereAnyOperationSign);
    saveOpeningBracketcsInArray.push(howManyOpeningBracket);
    saveClosingBracketcsInArray.push(howManyClosingBracket);
    saveIsThereADotInNumberInArray.push(isThereADotInNumber);
    didSomeOnePushedDeleteAll=false;
  }

})

//end adding eventlistener to dot
  





// for numbersAndOperators deleting opening brackets from the end for    calculateResult

document.querySelector(".calculateResult").addEventListener("click",()=>{
// first i need to call the function which deletes the unnecesery things like
//bracketcs from the end, so for example the next function wont add a
//closing bracket for them, which would be bad
  for(let i=0;i<1;i++){
    let lastChar=numbersAndOperators[numbersAndOperators.length-1];
    if(lastChar=="("){
      numbersAndOperators=numbersAndOperators.slice(0,-1);
      saveOperatorsInArray.pop();
      saveClosingBracketcsInArray.pop();
      saveOpeningBracketcsInArray.pop();
      saveIsThereADotInNumberInArray.pop();
      
      document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
      i--;
      howManyOpeningBracket+=-1; // this needs so next in the next function
      // it wont create closing bracket for the deleted oppening backet from the end

    }else if( lastChar=="+"||lastChar=="-" || lastChar=="*" || lastChar=="/"){
      numbersAndOperators=numbersAndOperators.slice(0,-1);
      saveOperatorsInArray.pop();
      saveClosingBracketcsInArray.pop();
      saveOpeningBracketcsInArray.pop();
      saveIsThereADotInNumberInArray.pop();
      lastChar=numbersAndOperators[numbersAndOperators.length-1];
      let isLastANumber=isNaN(lastChar) ? false : true;
      if(isLastANumber){isThereAnyOperationSign=0;}
      if(lastChar=="("||lastChar==")"){isThereAnyOperationSign=1;}
     
      document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
      i--;
    }
  }

  
      ;})


      //for    calculateResult for numbersAndOperators adding missing bracket notation 

document.querySelector(".calculateResult").addEventListener("click",()=>{
  let isThereMoreOpeningBrackets=howManyOpeningBracket-howManyClosingBracket;
  for(let i=0; i<isThereMoreOpeningBrackets; i++){
    numbersAndOperators+=")";
    howManyClosingBracket++;
    saveOpeningBracketcsInArray.push(howManyClosingBracket);
  }
  })

  
// before calculateResult if there are two + next to each other then make it one
//or if there is two -- next to each other make it one
//couse the eval function does not take it it says:
//"Uncaught SyntaxError: invalid increment/decrement operand"
document.querySelector(".calculateResult").addEventListener("click",()=>{
  forResultnumbersAndOperatorsWhithoutDoublePlus=
  numbersAndOperators.replace(/\+\+/g, "+");

  forResultnumbersAndOperatorsWhithoutDoubleMinusOrPlus=
  forResultnumbersAndOperatorsWhithoutDoublePlus.replace(/\-\-/g, "-");
})

//
  

//   calculateResult
  document.querySelector(".calculateResult").addEventListener("click",()=>{
   if(numbersAndOperators!=""){
      let result=eval(forResultnumbersAndOperatorsWhithoutDoubleMinusOrPlus);
    document.querySelector(".result").textContent=`The last result is: ${result}`;
   }
  })



    //delete
document.querySelector(".delete").addEventListener("click",()=>{
  if(numbersAndOperators!=""&&numbersAndOperators!=undefined){
   numbersAndOperators=numbersAndOperators.slice(0,-1);
   isThereAnyOperationSign=saveOperatorsInArray[numbersAndOperators.length-1];
   howManyOpeningBracket=saveOpeningBracketcsInArray[numbersAndOperators.length-1];
   howManyClosingBracket=saveClosingBracketcsInArray[numbersAndOperators.length-1];
   isThereADotInNumber=saveIsThereADotInNumberInArray[numbersAndOperators.length-1];
   let lastChar=numbersAndOperators[numbersAndOperators.length-1];
   if(lastChar==undefined){isThereAnyOperationSign=0;}
   //if its not here and i start the operation writing a number and dot then deleting it
//and write again, i wont be able to use dot again!!
   if(lastChar==undefined){isThereADotInNumber=false};
   if(lastChar==undefined){howManyOpeningBracket=0};
   if(lastChar==undefined){howManyClosingBracket=0};

   document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
  }





})

document.querySelector(".return").addEventListener("click",()=>{
  if(didSomeOnePushedDeleteAll==true){
    //numbersAndOperators=saveNumbersAndOperatorsBeforeDeleteAll;
    saveNumbersAndOperators=saveNumbersAndOperatorsBeforeDeleteAll;
    saveOpeningBracketcsInArray=saveHowManyOpeningBracketBeforeDelete;
    saveClosingBracketcsInArray=saveHowManyClosingBracketBeforeDelete;
    saveOperatorsInArray=saveOperatorsInArrayBeforeDelete;
    saveIsThereADotInNumberInArray=saveIsThereADotInNumberInArrayBeforeDeleteAll;
 
    //numbersAndOperators=saveNumbersAndOperators[numbersAndOperators.length];
    numbersAndOperators=saveNumbersAndOperators.slice(0,howLongNumbersAndOperatorsBeforeDeleteAll);
    console.log("saveNumbersAndOperators",saveNumbersAndOperators);
    console.log("howLongNumbersAndOperatorsBeforeDeleteAll",howLongNumbersAndOperatorsBeforeDeleteAll);
    howManyOpeningBracket=saveOpeningBracketcsInArray[numbersAndOperators.length-1];
    howManyOpeningBracket=saveOpeningBracketcsInArray[numbersAndOperators.length-1];
    //ha ez nincs bent akkor is működik? is there a dot?
    isThereADotInNumber=saveIsThereADotInNumberInArray[numbersAndOperators.length-1];
    isThereAnyOperationSign=saveOperatorsInArray[numbersAndOperators.length-1];
 
    document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
    didSomeOnePushedDeleteAll=false;


  }else if(saveNumbersAndOperators[numbersAndOperators.length]!=undefined){

  
    // here there is my string  numbersAndOperators and an other string
    // saveNumbersAndOperators which representst the numbers before deleting from it
    //when i delete  numbersAndOperators change but saveNumbersAndOperators don't
    //so when i phus return, i want to add one character bact at a time to my
    //numbersAndOperators from saveNumbersAndOperators
    //and i want to ad the next char, which is basicly 
    //saveNumbersAndOperators[numbersAndOperators.length]
    // cosue numbersAndOperators.length is exatly bigger whith one than the place
    //of the last character from numbersAndOperators
  numbersAndOperators+=saveNumbersAndOperators[numbersAndOperators.length];





  //here the reason i -1 from numbersAndOperators.length in
  //saveOperatorsInArray[numbersAndOperators.length-1]
  // couse in this function i already added a char to numbersAndOperators before
  // so numbersAndOperators is one longer than the the number we currently want to get
  isThereAnyOperationSign=saveOperatorsInArray[numbersAndOperators.length-1];
  howManyOpeningBracket=saveOpeningBracketcsInArray[numbersAndOperators.length-1];
  howManyClosingBracket=saveClosingBracketcsInArray[numbersAndOperators.length-1];
  isThereADotInNumber=saveIsThereADotInNumberInArray[numbersAndOperators.length-1];
  


 
  document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;


  }
})

//delete all
document.querySelector(".deleteAll").addEventListener("click",()=>{
    howLongNumbersAndOperatorsBeforeDeleteAll=numbersAndOperators.length;
    saveNumbersAndOperatorsBeforeDeleteAll=saveNumbersAndOperators;
    saveOperatorsInArrayBeforeDelete=saveOperatorsInArray;
    saveHowManyClosingBracketBeforeDelete=saveClosingBracketcsInArray;
    saveHowManyOpeningBracketBeforeDelete=saveOpeningBracketcsInArray;
    saveIsThereADotInNumberInArrayBeforeDeleteAll=saveIsThereADotInNumberInArray;
    //azért kell lenullázni, mert ha nem nullázom le, es törlöm delete allall
    // akkor fent állhat a lehetőség, hogy hogy amikor ujra elkezdekk dotott írni
    //nem fogok tudni, mert előzőleg már volt benne
    saveNumbersAndOperators=[];
    saveIsThereADotInNumberInArray=[];
    saveClosingBracketcsInArray=[];
    saveOpeningBracketcsInArray=[];
    saveOperatorsInArray=[];
    isThereADotInNumber=false;
    numbersAndOperators="";
    isThereAnyOperationSign=1;
    howManyOpeningBracket=0;
    howManyClosingBracket=0;
    didSomeOnePushedDeleteAll=true;

    document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;


  })