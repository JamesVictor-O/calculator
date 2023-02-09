class Calculator{
    constructor(currentOperationTex,previouOperationText){
        this.previouOperationText=previouOperationText;
        this.currentOperationText=currentOperationTex;
        this.clear();
    }
    clear(){
       this.currentOperation="";
       this.previouOperation="";
       this.operation=undefined;
    }
    delete(){
      this.currentOperation=this.currentOperation.toString().slice(0,-1)
    }
    appendNumber(number){
      if(number === "."&& this.currentOperation.includes("."))return
      this.currentOperation=this.currentOperation.toString() + number.toString()
    }
    chooseOperation(operation){
      if(this.currentOperation==="")return
      if(this.previouOperation !== ""){
         this.compute();
      }
        this.operation=operation
        this.previouOperation=this.currentOperation;
        this.currentOperation="";
    }
    compute(){
      let computation="";
      let prev=parseFloat(this.previouOperation);
      let current=parseFloat(this.currentOperation);
      if(isNaN(prev)|| isNaN(current)) return;
      switch(this.operation){
         case "+":
            computation=prev + current;
            break
         case "*"  :
            computation=prev * current;
            break
         case "/":
            computation=prev / current;
            break
         case "-":
            computation=prev / current;
            break
         default:
            return
      }
      this.currentOperation=computation;
      this.operation=undefined
      this.previouOperation="";

    }
   updateDisplay(){
      this.currentOperationText.innerText=this.currentOperation;
      this.previouOperationText.innerText=this.previouOperation
   }
 }
const numberButton=document.querySelectorAll("[data-number]");
const operationButton=document.querySelectorAll("[data-operation]");
const clearButton=document.querySelector(".clear")
const deleteButton=document.querySelector("[data-delete]")
const equalsButton=document.querySelector("[data-equals]")

const currentOperationText=document.querySelector(".current");
const previouOperationText=document.querySelector(".previos");

const calculator=new Calculator(currentOperationText,previouOperationText)
numberButton.forEach((button)=>{{
   button.addEventListener("click", (e)=>{
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
   })
}})
 
// operation
operationButton.forEach((button)=>{{
   button.addEventListener("click", (e)=>{
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
      console.log(button.innerHTML)
   })
}})
equalsButton.addEventListener("click", (e)=>{
   calculator.compute();
   calculator.updateDisplay();
})
clearButton.addEventListener("click", ()=>{
   calculator.clear();
   calculator.updateDisplay();
})
deleteButton.addEventListener("click",()=>{
   calculator.delete();
   calculator.updateDisplay();
})