
function validEmail(email) {
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
  }
  
  document.getElementById('sign-in-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    let emailInput = document.getElementById('email').value;
    let emailError = document.getElementById('email-error');
  
    if (!validEmail(emailInput)) {
      emailError.innerHTML = "Please enter a valid email address";
      event.preventDefault();
    } else {
      emailError.innerHTML = "";
    }
  
    let passwordInput = document.getElementById('password').value;
    let confirmPasswordInput = document.getElementById('confirm-password').value;
    let passwordError = document.getElementById('confirm-password-error');
  
    if (passwordInput !== confirmPasswordInput) {
      passwordError.innerHTML = "Passwords must match";
      event.preventDefault();
    } else {
      passwordError.innerHTML = "";
    }
  
    let data = {
      email: emailInput,
      password: passwordInput
    };

    // Implementation without async-await
  
    let options = {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
    };
  
    fetch('https://reqres.in/api/login', options)
      .then((response) => {
        if(response.status !== 200){
          window.alert('Invalid Credentials')
        }
        else{
          window.alert('Form was submitted successfully')
          document.getElementById('sign-in-form').reset()
        }
        console.log(response.status)
        return response.json();
      })
      .then((json) => {
        console.log(json);
        // document.getElementById('sign-in-form').reset();
      })
      .catch(error => {
        console.log(error);
      })

  
      // Implementation using async-await

//     const sendData = async () => {
//         let options = {
//         method: "POST",
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data),
//     };

//     let fetchAPI = await fetch('https://reqres.in/api/login', options);
//     let response = await fetchAPI.json();
//     return response;
// } 

// const main = async () => {
//     let data = await sendData();
//     console.log(data);
// }

// main();

});
  
  
