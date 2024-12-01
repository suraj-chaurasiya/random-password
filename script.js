const passwordbox=document.getElementById("password");
const lenght="12";

const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase ="abcdefghijklmnopqrstuvwxyz";
const number ="0123456789";
const symble ="~!@#$%^&*?";

const allchars = uppercase + lowercase + number +symble;

function createpassword(){
    let password ="";

    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password +=lowercase[Math.floor(Math.random()*lowercase.length)];
    password +=number[Math.floor(Math.random()*number.length)];
    password +=symble[Math.floor(Math.random()*symble.length)];

    while(lenght > password.length){
        password += allchars[Math.floor(Math.random()*allchars.length)];
    }
    passwordbox.value = password;
}
function copyToClipboard() {
    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    if (password) {
        // Copy to clipboard using the Clipboard API
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy the password.');
        });
    } else {
        alert('No password to copy!');
    }
}