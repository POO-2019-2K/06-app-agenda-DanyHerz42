import Contacto from "./contact.js";
import Table from "./table.js";
class Main {
    constructor() {

        // localStorage.clear();
        let aCon = [];
        let table = document.querySelector("#table");
        let nTable = new Table(table);
        if (localStorage.getItem("contacts") === null) {
            
        } else {
            aCon = JSON.parse(localStorage.getItem('contacts'));
            nTable._generateTable(aCon);
            console.log("hola")
        }
        let btn = document.querySelector("#btnAdd")
        btn.addEventListener("click", () => {
           this._validarFormulario()
            
        });
        let orderAge = document.querySelector("#orderAge").addEventListener("click", () => {
            nTable._orderTableByAge();
        });
        let orderAlphabet = document.querySelector("#orderAlphabet").addEventListener("click", () => {
            nTable._orderTableByAlphabet();
            console.log("hola");
        });
    }

    _validarFormulario() {
        let form = document.querySelector("#form");
        if (form.checkValidity() === true) {
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