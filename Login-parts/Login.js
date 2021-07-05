const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-form-submit");

    let validate = function(){
        let username = loginForm.username.value;
        let password = loginForm.password.value;

            if (username === "admin" && password == "12345") {
                // window.location.href ="todoHome.html"
                // console.log("success")
                return true
            } else {
                alert("wrong pass word");
                location.reload;
                return false
            }
    }



// const login = (username,password) => {
//     return new Promise((resolve,reject)=>{
//     if (username === "admin" && password === "12345") {
//         resolve('you are successfully logged in')
//         window.open('Login.html')
//     } else {
//         reject('invalid credentials')
//     }
//     })
// }
// const login = async (username, password) => {
//     if (!username || !password) {
//         console.log ('Missing Credentials')}
//     else if (username =="admin" && password === '12345') {
//         console.log("welcome")
//          return 'WELCOME!'
//    }
//    .
// }
// const redirect = async() =>{
//     try {
//         await login(loginForm.username.value,loginForm.password.value)
//         window.open("Login.html")

//        
//     } catch (e) {
//         console.log("CAUGHT AN ERROR!")
//         console.log("error is:", e)
//     }
// }

// loginForm.addEventListener('onsubmit',login(loginForm.username.value,loginForm.password.value)
//     .then(msg => {
//         console.log("LOGGED IN!")
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log("ERROR!")
//         console.log(err)
//     }))

