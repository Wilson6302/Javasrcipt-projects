let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let operators=document.getElementById("operators")
let button=document.getElementById("button")
let result=document.getElementById("result")
let addele=document.getElementById("id1")
let subele=document.getElementById("id2")
let multiplyele=document.getElementById("id3")
let divideele=document.getElementById("id4")
// let lastoperation=null

function getvalues(){
    let n1=parseFloat(num1.value)
    let n2=parseFloat(num2.value)
    if(isNaN(n1)||isNaN(n2)){
        // result.textContent="Enter a valide number"
        return null;
    }
    
    return {n1,n2};
}

    function add(){
    let values=getvalues()
    if(!values)
        return;
     result.textContent=values.n1+values.n2
    //  lastoperation=add;



    }
    function subtract(){
    let values=getvalues()
    if(!values)
        return;
     result.textContent=values.n1-values.n2
    //  lastoperation=subtract;
    
    }
    function multiply(){
    let values=getvalues()
    if(!values)
        return;
     result.textContent=values.n1*values.n2
    //  lastoperation=multiply;
    
    }
    function divide(){
    let values=getvalues()
    if(!values)
        return;
      if(values.n2===0){
        result.textContent="Can't Divide by Zero"
        return;
     }

     result.textContent=values.n1/values.n2
    //  lastoperation=divide;
 
    
    }


// addele.addEventListener("click",add)
// subele.addEventListener("click",subtract)
// multiplyele.addEventListener("click",multiply)
// divideele.addEventListener("click",divide)

button.addEventListener("click", add)
button.addEventListener("click",subtract )
button.addEventListener("click",multiply )
button.addEventListener("click",divide )

