export default class Contacto{
    constructor(contacto){
        this._name = contacto.name;
        this._phone = contacto.phone;
        this._birthdate = contacto.birthdate;
        this._email = contacto.email;
        this._obtenerFechaString(this._birthdate);
        this._obtenerObjectFecha(this._birthdate);
    }

    _obtenerFechaString(fecha){
        let s = fecha.split("-");
        let stringFecha = s[2] + "/" + s[1] + "/" + s[0];
        console.log(stringFecha);
    }

    _obtenerObjectFecha(fecha){
        let s = fecha.split("-");
        let oFecha = new Date(s[0],s[1] - 1,s[2]);
        console.log(oFecha);
    }

    _guardarEnLocalStorage(){
        
    }
}