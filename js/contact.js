import Table from "./table.js";
export default class Contacto {
    constructor(contacto) {
        this._name = contacto.name;
        this._phone = contacto.phone;
        this._birthdate = contacto.birthdate;
    }

    _obtenerFechaString(fecha) {
        let objetoFecha = this._obtenerObjetoFecha(fecha)
        let arrayMeses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        let s = fecha.split("-");
        let stringFecha = s[2] + "/" + arrayMeses[objetoFecha.getMonth()] + "/" + s[0];
        return stringFecha;
    }

    _obtenerObjetoFecha(fecha) {
        let s = fecha.split("-");
        let oFecha = new Date(s[0], s[1] - 1, s[2]);
        return oFecha;
    }

    _guardarEnLocalStorage() {
        let table = new Table(document.querySelector("#table"));
        let aCont = [];
        let objeto = {
            name: this._name,
            phone: this._phone,
            birthdate: this._obtenerFechaString(this._birthdate),
            age: this._calcularEdad(this._obtenerObjetoFecha(this._birthdate)),
        }
        if (localStorage.getItem("contacts") === null) {
            aCont.push(objeto);
            localStorage.setItem("contacts", JSON.stringify(aCont));
            table._generateTable(aCont);
            console.log(JSON.parse(localStorage.getItem("contacts")));
            Swal.fire({
                type: "success",
                text: "Added contact!",
                title: "Ready!",
                confirmButtonText: "OK"
            })
        } else {
            let bandera = true;
            aCont = JSON.parse(localStorage.getItem("contacts"));
            aCont.forEach((e, index) => {
                console.log(e.phone, objeto.phone)
                if (e.phone === objeto.phone) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'This person is already added to this workshop!',
                        type: 'error',
                        confirmButtonText: 'OK'
                    });
                    bandera = false;
                }
            })
            if (bandera === true) {
                aCont = JSON.parse(localStorage.getItem("contacts"));
                aCont.push(objeto);
                table._generateTable(aCont);
                localStorage.setItem("contacts", JSON.stringify(aCont));
                console.log(JSON.parse(localStorage.getItem("contacts")));
                Swal.fire({
                    type: "success",
                    text: "Added contact!",
                    title: "Ready!",
                    confirmButtonText: "OK"
                })
            }
        }
    }

    _calcularEdad(birthdate) {
        let birth = birthdate.getTime();
        let now = new Date().getTime();

        let oneDay = 24 * 60 * 60 * 1000;
        let oneYear = oneDay * 365;
        let differenceMs = now - birth;

        let age = Math.trunc(differenceMs / oneYear);
        return age;
    }

    _eliminarContacto(phone) {
        let aCont = JSON.parse(localStorage.getItem("contacts"));
        aCont.forEach((e, index) => {
            if (phone === e.phone) {
                aCont.splice(index, 1);
            }
        });
        localStorage.setItem("contacts", JSON.stringify(aCont));
    }
}