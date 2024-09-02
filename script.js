const passwordInput = document.getElementById("password");
    const lengthInput = document.getElementById("length");
    const lengthValue = document.getElementById("length-value");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const symbolsCheckbox = document.getElementById("symbols");

    function generatePassword() {
      const length = lengthInput.value;
      const uppercase = uppercaseCheckbox.checked;
      const lowercase = lowercaseCheckbox.checked;
      const numbers = numbersCheckbox.checked;
      const symbols = symbolsCheckbox.checked;

      let characters = "";
      if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
      if (numbers) characters += "0123456789";
      if (symbols) characters += "!@#$%^&*()_+~|}{[]\:;?><,./-=";

      let password = "";
      for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      passwordInput.value = password;
    }

    lengthInput.addEventListener("input", () => {
      lengthValue.textContent = lengthInput.value;
    });

    generatePassword();