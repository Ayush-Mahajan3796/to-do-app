const text=document.getElementById("text");
const l1=document.getElementById("l1");

function addtask(){
    if(text.value ==''){
        alert("You must write something !!!")
    }else{
        let li=document.createElement("li");
        li.innerHTML=text.value;
        l1.appendChild(li);
        const del=document.createElement("del");
        del.innerHTML="\u00d7";
        li.appendChild(del);

    }
    text.value="";
    savedata();
}
l1.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName=="DEL"){
       e.target.parentElement.remove();
       savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",l1.innerHTML);
}
function showtask(){
    l1.innerHTML=localStorage.getItem("data");
}
showtask();