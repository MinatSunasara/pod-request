function myfunction(){
    var email = document.getElementById('email').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var flag = 1;
    
    if (email=="") {
        document.getElementById('demo').innerHTML = "Oops! Please add your email";
        return false;
    }
    else if (filter!=email) {
        document.getElementById('demo').innerHTML= "Oops! Please check your email";
        return false;
    }
    else{
        return true;
    }
}




// function emailvalidation(){
//     var errormsg = document.getElementById("demo");
//     var email = document.getElementById("email");
//     var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
//     if(email.value == ''){
//         demo.style.display = 'block';
//         demo.innerHTML="Please Enter a Valid Email";
//         return false;
//     }else if(!regex.test(email.value)){
//         demo.style.display = 'block';
//         demo.innerHTML="Oops! Please check your email";
//         return false;
//     }
//     else{
//         demo.style.display='none';  
//         return true;
//     }
// }