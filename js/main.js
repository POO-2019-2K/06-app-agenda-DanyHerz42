import Contacto from "./contact.js";
import Table from "./table.js";
class Main{
    constructor(){
        // localStorage.clear();
        let aCon = [];
        let table = document.querySelector("#table");
        let nTable = new Table(table);
        if (localStorage.getItem("contacts") === null) {
            return;
        } else {
            aCon = JSON.parse(localStorage.getItem('contacts'));
            nTable._generateTable(aCon); 
        }
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
                birthdate: document.querySelector("#birthdate").value
            };   
            let contacto = new Contacto(contact);
            contacto._guardarEnLocalStorage();
        }
        form.classList.add("was-validated");

    }
}
new Main();