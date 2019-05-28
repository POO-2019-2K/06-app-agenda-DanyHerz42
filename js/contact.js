export default class Contacto {
    constructor(contacto) {
        this._name = contacto.name;
        this._phone = contacto.phone;
        this._birthdate = contacto.birthdate;
        this._email = contacto.email;
        this.guardarEnLocalStorage();
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

    guardarEnLocalStorage() {
        let aCont = [];
        let objeto = {
            name: this._name,
            phone: this._phone,
            birthdate: this._obtenerFechaString(this._birthdate),
            age: this._calcularEdad(this._obtenerObjetoFecha(this._birthdate)),
            email: this._email
        }
        
        if(localStorage.getItem("contacts") === null){
            aCont.push(objeto);
        }else{
            aCont = JSON.parse(localStorage.getItem("contacts"));
            aCont.push(objeto);
        }

        localStorage.setItem("contacts", JSON.stringify(aCont));
        console.log(localStorage.getItem("contacts"));
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
}