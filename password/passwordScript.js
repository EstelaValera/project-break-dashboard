/*Generador de contraseñas seguras:

### ¿Como funciona?
Crea una página que tendrá lo siguiente:
- Tendrá entre 12 caracteres como mínimo y 50 de máximo. Se podrá elegir el número de caracteres
- Se compondrá de mayúsculas, minúsculas, números y símbolos. Mínimo una de cada.
- Tendremos un input dónde meteremos la longitud de la contraseña y un botón para que nos de el resultado.
- Dale estilo con CSS'¡
### ¿Qué usaremos?
- `Math.random()` Para generar aleatoriedad
- Mayúsculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
- Minúsculas: "abcdefghijklmnopqrstuvwxyz"
- Números: "0123456789"
- Símbolos "!@#$%^&*()-_=+"

### PISTAS Y CONSEJOS
- Guarda cada uno de los datos (mayúsculas, minúsculas, símbolos y núemeros) en una variable para poder recorrerlos.
- Usa bucles y condicionales
*/

const pass = document.getElementById('pass');
const form = document.getElementById('passForm')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputValue = document.getElementById('input').value;

    console.log('Valor del input:', inputValue);
    const password = generarContraseña(inputValue);
    pass.textContent = password;  // Mostrar la contraseña generada en la página
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

