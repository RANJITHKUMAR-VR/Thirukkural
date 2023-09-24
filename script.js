let first;
let second;
function values(){
    let c=document.getElementById("num").value;
    let b=c;
    let a="https://api-thirukkural.vercel.app/api?num="+b;
    fetch(a)
    .then((result)=>result.json())
    .then(msg=>{
        function get(){
        first=msg.line1;
        second=msg.line2;
        println();
        }
        get();
    });
}
function println(){
    let line1=document.getElementById("line1");
    line1.innerText=first;
    let line2=document.getElementById("line2");
    line2.innerText=second;
}
let inp=document.getElementById("num");
addEventListener("keydown",(e)=>{
    if(document.activeElement===inp){
        if(e.keyCode===13){
            if(inp.value!=""){
                let btn=document.getElementById("btn");
                btn.click();
                inp.value="";
            }
        else{
            alert("enter the thirukkural number")
        }
    }
    }
})
