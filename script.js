const button=document.getElementById("btn")
const input=document.getElementById("input_id");
const output=document.getElementById("output");
const uname=document.getElementById("uname")
const ing=document.getElementById("ing")
const clear=document.getElementById("clear")
const curdate=document.getElementById("curdate");
const share=document.getElementById("share");

share.addEventListener("click",(event)=>{
if (navigator.share) {
    navigator.share({
        title:"QR Web Application",
        url:" https://abvkumarsingh.github.io/QR_Creator_API/"
    })
}
})
// let curtime=new Date();
// curdate.innerHTML= curtime.toLocaleTimeString();
clear.addEventListener("click",()=>{
    input.value=" "
})
// const p=input.value;

// uname.innerHTML=p;
    //  uname.innerText= input.value;
    setInterval(()=>{
        let curtime=new Date();
        curdate.innerHTML= curtime.toLocaleTimeString();
        },1000);

function display(p) {
    uname.innerText= p;

}
button.addEventListener("click", ()=>{
    const inputdata=input.value;
    display(inputdata);
    //  uname.innerText= input.value;
    // setInterval(()=>{
    // let curtime=new Date();
    // curdate.innerHTML= curtime.toLocaleTimeString();
    // },1000);
    
    

         ing.src=  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputdata}`;




    
});