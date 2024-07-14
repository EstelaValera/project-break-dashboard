
const pass = document.getElementById('pass');
const form = document.getElementById('passForm')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('input').value;

    console.log('Valor del input:', inputValue);
    const password = generarContraseña(inputValue);
    pass.textContent = password; 
});

function generarContraseña(length) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+";
    const allChars = uppercase + lowercase + numbers + symbols;
    let password = '';

    if (length == null ) {
        alert('Introduce una cantidad mínima de 15 caracteres, y una máxima de 50 caracteres.')
    } 
    else {
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
        console.log(password)
        return password;
    }


    
}

