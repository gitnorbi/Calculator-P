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








// for isthere dot and isthere operationsign make ifthe value is 2 u cant put more opp signs
//addeventlisteners where i added it to single buttons with for each change it
//mentse el a dotot
//pi mentését és ifjet, ha már van pi akkor ugyn arra a számra ne lehessen még egy
//az eval function nem mukodik ha két plus van egymas után vagy két minusz
//ha ket plusz van mielott belekerül az eval funktionba egy regexel szedjem ki az egyiket
//ahol két minusz van ott alakítsam pluszra és szedjem ki az egyiket
// de ugy hogy ezeketet egy kulon variobelbe tegyem és ez ekrüljön bele az evalba és az eredetit
//ne bántsa!!


//adding eventlistener to numberButtons
document.querySelectorAll('.numberButton').forEach(item => {
    item.addEventListener('click', event => {
    

      let lastChar=numbersAndOperators[numbersAndOperators.length-1];
      // The if couse we should not be able to write a number after a closing
      // bracket
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
    // console.log("lastChar ", lastChar);
    // console.log("howManyOpeningBracket  before ", howManyOpeningBracket);
    // console.log("howManyClosingBracket, before ", howManyClosingBracket);
    

    
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
      // console.log("howManyOpeningBracket after ", howManyOpeningBracket);
      // console.log("howManyClosingBracket after ", howManyClosingBracket);
  }
  
  })
})
// end adding eventlistener to endBracketButton
 
/*
// pi
  document.querySelector(".pi").addEventListener("click",()=>{
    
  

 let lastChar=numbersAndOperators[numbersAndOperators.length-1];
      // The if couse we should not be able to write a number after a closing
      // bracket
      if(lastChar!=")"&&isThereADotInNumber==false){
      //This is where we cut the unsused chars from saveOperatorsInArray
      // when click on a number
      //the slice method is used couse after deleting chars from numbersAndOperators
      //whit the delete function saveOperatorsInArray is not updated and here
      //where we update it, we should cut the not used chars
        saveOperatorsInArray=saveOperatorsInArray.slice(0,numbersAndOperators.length);
      // we update the varibale, we add to it the button's textcontent
        numbersAndOperators+=Math.PI;
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

      isThereADotInNumber=true;
      }

    })
  */
    


// adding eventlistener to dot
document.querySelector('.dot').addEventListener("click",(event)=>{

  let lastChar=numbersAndOperators[numbersAndOperators.length-1];
  let isLastANumber=isNaN(lastChar) ? false : true;
//if(lastChar=="."){isThereADotInNumber=true};
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
      // console.log(numbersAndOperators);
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
      // console.log(numbersAndOperators);
      document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
      i--;
    }
  }
  /*// console.log("number", numbersAndOperators);
  let eredmeny=eval(numbersAndOperators);
  // console.log("eredmeny ",eredmeny);
  */
  
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
    // console.log("number", numbersAndOperators);
   // console.log(forResultnumbersAndOperatorsWhithoutDoubleMinusOrPlus);
   if(numbersAndOperators!=""){
      let result=eval(forResultnumbersAndOperatorsWhithoutDoubleMinusOrPlus);
    // console.log("eredmeny ",result);
    document.querySelector(".result").textContent=`The last result is: ${result}`;
   }
  })



    //delete
document.querySelector(".delete").addEventListener("click",()=>{
  // console.log("delete");
  // console.log("howManyOpeningBracket before delete", howManyOpeningBracket);
  // console.log("howManyClosingBracket, before delete", howManyClosingBracket);
  // console.log("saveOpeningBracketcsInArray b", saveOpeningBracketcsInArray);
  // console.log("saveClosingBracketcsInArray b", saveClosingBracketcsInArray);
   // numbersAndOperators=numbersAndOperators.substring(0, numbersAndOperators.length - 1);
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
  // // console.log(saveOperatorsInArray);
  // // console.log(numbersAndOperators);
   document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
  }

  // console.log("howManyOpeningBracket after d", howManyOpeningBracket);
  // console.log("howManyClosingBracket, after d ", howManyClosingBracket);
  // console.log("saveOpeningBracketcsInArray a", saveOpeningBracketcsInArray);
  // console.log("saveClosingBracketcsInArray a", saveClosingBracketcsInArray);
   /*
   let lastChar=numbersAndOperators[numbersAndOperators.length-1];
   let secondToLast=numbersAndOperators[numbersAndOperators.length-2];
   if(lastChar==number){isThereAnyOperationSign=0;}
   if(lastChar=="(" || ")"){isThereAnyOperationSign=1;}
   //if(lastChar==opps && beforeLast==opps){isThereAnyOperationSign=2;}
   if(beforeLast=="(" || lastChar==")" || opp && lastChar==opps){isThereAnyOperationSign=2;}
   if(beforeLast==number && lastChar==opps){isThereAnyOperationSign=1;}*/
/*
   let lastChar=numbersAndOperators[numbersAndOperators.length-1];
   if(lastChar=="("){howManyOpeningBracket--;}
   else if(lastChar==")"){howManyClosingBracket--}

   
    numbersAndOperators=numbersAndOperators.slice(0,-1);
    // console.log(numbersAndOperators);
  //ujra kell venni törlés után
  // console.log("lastChar before ",lastChar);
    lastChar=numbersAndOperators[numbersAndOperators.length-1];
    // console.log("lastChar after ",lastChar);
    let beforeLast=numbersAndOperators[numbersAndOperators.length-2];
    let isBeforeLastANumber=isNaN(beforeLast) ? false : true;
    let isLastANumber=isNaN(lastChar) ? false : true;
    if(isLastANumber){isThereAnyOperationSign=0; // console.log("elso",isThereAnyOperationSign);}
    else if(lastChar=="(" || lastChar==")"){isThereAnyOperationSign=1;// console.log("masodik",isThereAnyOperationSign);}
    //if(lastChar==opps || lastChar==brackets && beforeLast==opps){isThereAnyOperationSign=2;}
    else if(isBeforeLastANumber==false &&  lastChar=="-"||lastChar=="+"||lastChar=="/"||lastChar=="*"){isThereAnyOperationSign=2;
    // console.log("harmadik",isThereAnyOperationSign);}
   // else if(isBeforeLastANumber==false && isLastANumber==true && lastChar!="(" || lastChar!=")"){isThereAnyOperationSign=2;}
    //else if(isBeforeLastANumber==true && lastChar==opps){isThereAnyOperationSign=1;}
   // else if(isBeforeLastANumber==true && isLastANumber==true && lastChar!="(" || lastChar!=")"){isThereAnyOperationSign=1;}
    else if(isBeforeLastANumber==true && lastChar=="-"||lastChar=="+"||lastChar=="/"||lastChar=="*"){isThereAnyOperationSign=1;
      // console.log("negyedik",isThereAnyOperationSign);}
    else if(beforeLast==undefined && isLastANumber==false){isThereAnyOperationSign=1;// console.log("ötödik",isThereAnyOperationSign);}
    else if(lastChar==undefined){isThereAnyOperationSign=0;// console.log("hatodik",isThereAnyOperationSign);}
    // console.log("howManyOpp= ", isThereAnyOperationSign);
*/

console.log("delete");
console.log("numbersAndOperators.length",numbersAndOperators.length);
console.log("numbersAndOperators",numbersAndOperators);
console.log("saveNumbersAndOperators",saveNumbersAndOperators);
console.log("howManyOpeningBracket",howManyOpeningBracket);
console.log("saveOpeningBracketcsInArray",saveOpeningBracketcsInArray);
console.log("howManyClosingBracket",howManyClosingBracket);
console.log("saveClosingBracketcsInArray",saveClosingBracketcsInArray);
console.log("isThereADotInNumber",isThereADotInNumber);
console.log("saveIsThereADotInNumberInArray",saveIsThereADotInNumberInArray);
console.log("isThereAnyOperationSign",isThereAnyOperationSign);
console.log("saveOperatorsInArray",saveOperatorsInArray);

})

document.querySelector(".return").addEventListener("click",()=>{
  
  // console.log("return");
  // console.log("howManyOpeningBracket before", howManyOpeningBracket);
  // console.log("howManyClosingBracket, before ", howManyClosingBracket);
  // console.log("saveOpeningBracketcsInArray bb", saveOpeningBracketcsInArray);
  // console.log("saveClosingBracketcsInArray bb", saveClosingBracketcsInArray);
  // console.log("saveHowManyOpeningBracketBeforeDelete bb",saveHowManyOpeningBracketBeforeDelete);
  // console.log("saveHowManyClosingBracketBeforeDelete bb",saveHowManyClosingBracketBeforeDelete);
  if(didSomeOnePushedDeleteAll==true){
    //numbersAndOperators=saveNumbersAndOperatorsBeforeDeleteAll;
    saveNumbersAndOperators=saveNumbersAndOperatorsBeforeDeleteAll;
    saveOpeningBracketcsInArray=saveHowManyOpeningBracketBeforeDelete;
    saveClosingBracketcsInArray=saveHowManyClosingBracketBeforeDelete;
    saveOperatorsInArray=saveOperatorsInArrayBeforeDelete;
    // console.log("saveIsThereADotInNumberInArray b",saveIsThereADotInNumberInArray)
    saveIsThereADotInNumberInArray=saveIsThereADotInNumberInArrayBeforeDeleteAll;
    // console.log("saveIsThereADotInNumberInArray a",saveIsThereADotInNumberInArray)

    //numbersAndOperators=saveNumbersAndOperators[numbersAndOperators.length];
    numbersAndOperators=saveNumbersAndOperators.slice(0,howLongNumbersAndOperatorsBeforeDeleteAll);
    console.log("saveNumbersAndOperators",saveNumbersAndOperators);
    console.log("howLongNumbersAndOperatorsBeforeDeleteAll",howLongNumbersAndOperatorsBeforeDeleteAll);
    howManyOpeningBracket=saveOpeningBracketcsInArray[numbersAndOperators.length-1];
    howManyOpeningBracket=saveOpeningBracketcsInArray[numbersAndOperators.length-1];
    //ha ez nincs bent akkor is működik? is there a dot?
    isThereADotInNumber=saveIsThereADotInNumberInArray[numbersAndOperators.length-1];
    isThereAnyOperationSign=saveOperatorsInArray[numbersAndOperators.length-1];
    // console.log(numbersAndOperators);
    document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
    didSomeOnePushedDeleteAll=false;

    // console.log("howManyOpeningBracket r after", howManyOpeningBracket);
    // console.log("howManyClosingBracket, r after", howManyClosingBracket);
    // console.log("saveOpeningBracketcsInArray aa", saveOpeningBracketcsInArray);
    // console.log("saveClosingBracketcsInArray aa", saveClosingBracketcsInArray);
    // console.log("saveHowManyOpeningBracketBeforeDelete a",saveHowManyOpeningBracketBeforeDelete);
    // console.log("saveHowManyClosingBracketBeforeDelete",saveHowManyClosingBracketBeforeDelete);
    
  }else if(saveNumbersAndOperators[numbersAndOperators.length]!=undefined){
    console.log("return b");
    console.log("numbersAndOperators.length b",numbersAndOperators.length);
    console.log("numbersAndOperators b",numbersAndOperators);
    console.log("saveNumbersAndOperators b",saveNumbersAndOperators);
    // console.log("numbersAndOperators b",numbersAndOperators);
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

  console.log("numbersAndOperators.length bb",numbersAndOperators.length);
  console.log("numbersAndOperators bb",numbersAndOperators);
  console.log("saveNumbersAndOperators bb",saveNumbersAndOperators);
  // console.log("numbersAndOperators a",numbersAndOperators);
  // console.log("saveNumbersAndOperators",saveNumbersAndOperators);
  // console.log("numbersAndOperators.length",numbersAndOperators.length);


  //here the reason i -1 from numbersAndOperators.length in
  //saveOperatorsInArray[numbersAndOperators.length-1]
  // couse in this function i already added a char to numbersAndOperators before
  // so numbersAndOperators is one longer than the the number we currently want to get
  isThereAnyOperationSign=saveOperatorsInArray[numbersAndOperators.length-1];
  howManyOpeningBracket=saveOpeningBracketcsInArray[numbersAndOperators.length-1];
  howManyClosingBracket=saveClosingBracketcsInArray[numbersAndOperators.length-1];
  isThereADotInNumber=saveIsThereADotInNumberInArray[numbersAndOperators.length-1];
  

  /*let lastChar=numbersAndOperators[numbersAndOperators.length-1];
  if(lastChar="("){saveOpeningBracketcsInArray[]}
  if(lastChar=")"){}
  if(lastChar=="+"||lastChar=="-"||lastChar=="/"||lastChar=="*"){}
  */
  // console.log(numbersAndOperators);
  document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;

  // console.log("numbersAndOperators.length-1",numbersAndOperators.length-1);
 // console.log("saveOpeningBracketcsInArray", saveOpeningBracketcsInArray);
 // console.log("saveClosingBracketcsInArray", saveClosingBracketcsInArray);
 
  // console.log("howManyOpeningBracket r after r", howManyOpeningBracket);
  // console.log("howManyClosingBracket, r after r ", howManyClosingBracket);
  console.log("return");
  console.log("numbersAndOperators.length",numbersAndOperators.length);
  console.log("numbersAndOperators",numbersAndOperators);
  console.log("saveNumbersAndOperators",saveNumbersAndOperators);
  console.log("howManyOpeningBracket",howManyOpeningBracket);
  console.log("saveOpeningBracketcsInArray",saveOpeningBracketcsInArray);
  console.log("howManyClosingBracket",howManyClosingBracket);
  console.log("saveClosingBracketcsInArray",saveClosingBracketcsInArray);
  console.log("isThereADotInNumber",isThereADotInNumber);
  console.log("saveIsThereADotInNumberInArray",saveIsThereADotInNumberInArray);
  console.log("isThereAnyOperationSign",isThereAnyOperationSign);
  console.log("saveOperatorsInArray",saveOperatorsInArray);
  }
})

//delete all
document.querySelector(".deleteAll").addEventListener("click",()=>{
  // console.log("delete all");
  // console.log("howManyOpeningBracket before delete all", howManyOpeningBracket);
  // console.log("howManyClosingBracket, before delete all ", howManyClosingBracket);
  // console.log("saveOpeningBracketcsInArray", saveOpeningBracketcsInArray);
  // console.log("saveClosingBracketcsInArray", saveClosingBracketcsInArray);
  // console.log("saveHowManyOpeningBracketBeforeDelete b",saveHowManyOpeningBracketBeforeDelete);
  // console.log("saveHowManyClosingBracketBeforeDelete b",saveHowManyClosingBracketBeforeDelete);
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
    // console.log("numbersAndOperators",numbersAndOperators);
    document.querySelector(".operatorsAndNumbers").textContent=numbersAndOperators;
    // console.log("saveOpeningBracketcsInArray after d all", saveOpeningBracketcsInArray);
    // console.log("saveClosingBracketcsInArray after delete all", saveClosingBracketcsInArray);
    // console.log("howManyOpeningBracket after delete all", howManyOpeningBracket);
    // console.log("howManyClosingBracket, after delete all", howManyClosingBracket);
    // console.log("saveHowManyOpeningBracketBeforeDelete a d all",saveHowManyOpeningBracketBeforeDelete);
    // console.log("saveHowManyClosingBracketBeforeDelete a d all",saveHowManyClosingBracketBeforeDelete);
    console.log("Delete all");

    console.log("saveNumbersAndOperatorsBeforeDeleteAll",saveNumbersAndOperatorsBeforeDeleteAll);
    console.log("numbersAndOperators.length",numbersAndOperators.length);
    console.log("numbersAndOperators",numbersAndOperators);
    console.log("saveNumbersAndOperators",saveNumbersAndOperators);
    console.log("howManyOpeningBracket",howManyOpeningBracket);
    console.log("saveOpeningBracketcsInArray",saveOpeningBracketcsInArray);
    console.log("howManyClosingBracket",howManyClosingBracket);
    console.log("saveClosingBracketcsInArray",saveClosingBracketcsInArray);
    console.log("isThereADotInNumber",isThereADotInNumber);
    console.log("saveIsThereADotInNumberInArray",saveIsThereADotInNumberInArray);
    console.log("isThereAnyOperationSign",isThereAnyOperationSign);
    console.log("saveOperatorsInArray",saveOperatorsInArray);

  })