import Contacto from "./contact.js";

export default class Table {
    constructor(table) {
        this._table = table;
    }

    _generateTable(contactos) {
        this._table.innerHTML = ""
        this._generateHeaderTable();
        contactos.forEach((e, index) => {
            this._generateRow(e);
        });
    }

    _generateRow(e) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = e.name;
        let td2 = document.createElement("td");
        td2.textContent = e.phone;
        let td3 = document.createElement("td");
        td3.textContent = e.birthdate;
        let td4 = document.createElement("td");
        td4.textContent = e.age;
        let td5 = document.createElement("td");
        let btnRemove = document.createElement("input");
        btnRemove.className = "btn btn-danger";
        btnRemove.type = "button";
        btnRemove.value = "Delete";
        btnRemove.addEventListener("click", () => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    let obj = {
                        name: e.name,
                        phone: e.phone,
                        birthdate: e.birthdate
                    }
                    let contact = new Contacto(obj);
                    contact._eliminarContacto(e.phone);
                    this._table.removeChild(tr);

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })

        });

        td5.appendChild(btnRemove)
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        this._table.appendChild(tr);
    }

    _generateHeaderTable() {
        let tHead = document.createElement("thead");
        let tr = document.createElement("tr");
        let th1 = document.createElement("th");
        th1.textContent = "Name";
        let th2 = document.createElement("th");
        th2.textContent = "Phone";
        let th3 = document.createElement("th");
        th3.textContent = "Birthday";
        let th4 = document.createElement("th");
        th4.textContent = "Age";
        let th5 = document.createElement("th");
        th5.textContent = "Actions";

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
        tHead.appendChild(tr);
        this._table.appendChild(tHead);
    }
} 