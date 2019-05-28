import Contacto from "./contact.js";
class Main{
    constructor(){
        document.querySelector("#btnAdd").addEventListener("click", () => {
            this._validarFormulario();    
        });
    }

    _validarFormulario(){
        let form = document.querySelector("#form");
        if(form.checkValidity() === true){
            let contact = {
                name: document.querySelector("#name").value,
                phone: document.querySelector("#phone").value,
                birthdate: document.querySelector("#birthdate").value,
                email: document.querySelector("#email").value
            };   
            let contacto = new Contacto(contact);
        }
        form.classList.add("was-validated");

    }
}
new Main();