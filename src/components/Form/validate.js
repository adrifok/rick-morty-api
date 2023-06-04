export default function validate (inputs){
const errors = {};
const regexEmail = /\S+@\S+\.\S+/
const regexPass = new RegExp ('^(?=[A-Za-z]+[0-9]|[0-9][A-Za-z])[A-Za-z0-9]{6,10}$')

if(!regexEmail.test(inputs.username)){
    errors.username = 'enter a valid email address';
}
if(!inputs.username){
    errors.username = 'error! username blank. Enter a valid email';
}
if(inputs.username.length > 35){
    errors.username = 'max length 35 characters';
}
if(!regexPass.test(inputs.password)){
    errors.password = 'password must be between 6-10 characters';
}
return errors;
}

