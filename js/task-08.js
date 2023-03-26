const loginForm = document.querySelector(".login-form");

      loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = loginForm.elements.email.value;
        const password = loginForm.elements.password.value.trim();
        if (email === "" || password === "") {
          alert("Всі поля обов'язково до заповнення");
        } else {
          const formDate = {
            email: email,
            password: password
          };
          console.log(formDate);
          loginForm.reset();
        }
      });