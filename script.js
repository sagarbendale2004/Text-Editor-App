function run(){
    let run = document.getElementById("code").value;
    let result_box = document.getElementById("result").innerHTML = run;
    
    let code_box1 = document.getElementById("code_box1");   
    code_box1.style.display = "none";
    
    let code_box2 = document.getElementById("code_box2");
    code_box2.style.display = "block";  
    code_box2.setAttribute("class","animate__animated animate__slideInRight");
   
    let run_btn = document.getElementById("run_btn");
    run_btn.style.display = "none";

    let return_btn = document.getElementById("return_btn");
    return_btn.style.display = "block";
}

function back(){
    let code_box2 = document.getElementById("code_box2");
    code_box2.style.display = "none";  
   
    let code_box1 = document.getElementById("code_box1");   
    code_box1.style.display = "block";
    code_box1.setAttribute("class","animate__animated animate__slideInLeft");
    
    let return_btn = document.getElementById("return_btn");
    return_btn.style.display = "none";
    
    let run_btn = document.getElementById("run_btn");
    run_btn.style.display = "block";
}