export class Teacher {

////////teacher attributs
  private _nic : number;
  private _name : string;
  private _lastname: string;
  private _email : string
  private _datebirth: Date;
  private _phonenumber: number
  private _password: string;
  private _gender:string;
  private _salary : number;
  private _nbrehour : number;
  private _group: object;

///////constructor teacher
  constructor(nic: number, name: string, lastname: string, email: string, datebirth: Date, phonenumber: number, password: string, gender: string, salary: number, nbrehour: number, group: object) {
    this._nic = nic;
    this._name = name;
    this._lastname = lastname;
    this._email = email;
    this._datebirth = datebirth;
    this._phonenumber = phonenumber;
    this._password = password;
    this._gender = gender;
    this._salary = salary;
    this._nbrehour = nbrehour;
    this._group = group;
  }
////////getters and setters
  get nic(): number {
    return this._nic;
  }

  set nic(value: number) {
    this._nic = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get datebirth(): Date {
    return this._datebirth;
  }

  set datebirth(value: Date) {
    this._datebirth = value;
  }


  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  get phonenumber(): number {
    return this._phonenumber;
  }

  set phonenumber(value: number) {
    this._phonenumber = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get nbrehour(): number {
    return this._nbrehour;
  }

  set nbrehour(value: number) {
    this._nbrehour = value;
  }

  get group(): object {
    return this._group;
  }

  set group(value: object) {
    this._group = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
