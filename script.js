
const form=document.getElementById("form");
const userTag=document.getElementById("user");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const psw=document.getElementById("psw");
const psw1=document.getElementById("psw1");

// ----------FIRST WAY --------------
// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     if (userTag.value===""){
//        userTag.className="form-control is-invalid" 
//       }
//     if (email.value===""){
//         email.className="form-control is-valid" 
//     }
//     if (phone.value===""){
//         phone.className="form-control is-invalid" 
//     }
//     if (psw.value===""){
//         psw.className="form-control is-invalid" 
//     }
//     if (psw1.value===""){
//         psw1.className="form-control is-invalid" 
//        }
// });

// ------SECOND WAY ---------
function error(input,message){
    input.className="form-control is-invalid";
    console.log(message)
    const divTag=input.nextElementSibling;
    divTag.innerText=message
    divTag.className="invalid-feedback"

}

function success(input){
    input.className="form-control is-valid";
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    if (userTag.value===""){
       error(userTag,"username gerekli") 
      }
      else{
          success(userTag)
      }
    if (email.value===""){
        error(email,"email gerekli") 
    }else if ( !validateEmail(email)){
        error(email,"xxxxx@xxx.com formatında bir adres girin")
    }

    else{
        success(email)
    }
    
    if (phone.value===""){
        error(phone,"Telefon gerekli") 
    }else{
        success(phone)
    }
    if (psw.value===""){
        error(psw,"Password gerekli") 
    }else{
        success(psw)
    }
    if (psw1.value===""){
        error(psw1,"Password tekrar giriniz")
           }else{
        success(psw1)
    }
});