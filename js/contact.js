export default class Contacto{
    constructor(contacto){
        this._name = contacto.name;
        this._phone = contacto.phone;
        this._birthdate = contacto.birthdate;
        this._email = contacto.email;
        this._calcularEdad(this._obtenerObjetoFecha(this._birthdate))
    }

    _obtenerFechaString(fecha){
        let s = fecha.split("-");
        let stringFecha = s[2] + "/" + s[1] + "/" + s[0];
        console.log(stringFecha);
    }

    _obtenerObjetoFecha(fecha){
        let s = fecha.split("-");
        let oFecha = new Date(s[0],s[1] - 1,s[2]);
        return oFecha;
    }

    guardarEnLocalStorage() {
        let objeto = {
          name: this._name,
          phone: this._phone,
          birthdate: this._obtenerFechaString(_birthdate),
          
        }
        let arrayContacts = [];
        arrayContacts.push()
      }
    
      _calcularEdad(birthdate){
        let birth = birthdate;
        let now = new Date().getTime();
    
        let difEdad = now - birth;
        difEdad = difEdad*1000*60*60*24*365;
        return console.log(birthdate.getTime(),now,difEdad);
      }
}