
const form=document.getElementById("form");
const userTag=document.getElementById("user");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const psw=document.getElementById("psw");
const psw1=document.getElementById("psw1");

// const newtooltip=document.createElement("button")
// newtooltip.className="btn btn-secondary"
// newtooltip.type="button"
// newtooltip.setAttribute("data-toggle","tooltip")
// newtooltip.setAttribute("data-placement","right")
// newtooltip.textContent="Invalid Username"

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
function error(input){
    input.className="form-control is-invalid";
}

function success(input){
    input.className="form-control is-valid";
}

form.addEventListener("submit",function(e){
    e.preventDefault();
    if (userTag.value===""){
       error(userTag) 
      }
    if (email.value===""){
        error(email) 
    }
    if (phone.value===""){
        success(phone) 
    }
    if (psw.value===""){
        error(psw) 
    }
    if (psw1.value===""){
        error(psw1) 
       }
});