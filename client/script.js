let first;
let second;
function values(){
    let c=document.getElementById("num").value;
    let b=c;
    let a="http://localhost:5000/thirukkural-api/"+b;
    fetch(a)
    .then((result)=>result.json())
    .then(msg=>{
        const kural=msg[0];
        function get(){
        first=kural.line1;
        second=kural.line2;
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