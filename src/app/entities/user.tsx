export default class Usuario {
    private nome: string;
    private email: string;
    private cpf: string;
    private dataNascimento: string;
    private telefone: string;
    private altura: string;
    private cep: string;
    private address: string;
    private addressNumber: string;
    private neighborhood: string;
    private city: string;
    private uf: string;
    private cirurgies: string;
  
    constructor(
      nome: string = "",
      email: string = "",
      cpf: string = "",
      dataNascimento: string = "",
      telefone: string = "",
      altura: string = "",
      cep: string = "",
      address: string = "",
      addressNumber: string = "",
      neighborhood: string = "",
      city: string = "",
      uf: string = "",
      cirurgies: string = ""
    ) {
      this.nome = nome;
      this.email = email;
      this.cpf = cpf;
      this.dataNascimento = dataNascimento;
      this.telefone = telefone;
      this.altura = altura;
      this.cep = cep;
      this.address = address;
      this.addressNumber = addressNumber;
      this.neighborhood = neighborhood;
      this.city = city;
      this.uf = uf;
      this.cirurgies = cirurgies;
    }
    
    public getCirurgies(): string {
        return this?.cirurgies
    }

    public setCirurgies(cirurgies: string): void {
        this.cirurgies = cirurgies
    }

    public getNome(): string {
      return this?.nome;
    }
  
    public setNome(nome: string): void {
      this.nome = nome;
    }
  
    public getEmail(): string {
      return this?.email;
    }
  
    public setEmail(email: string): void {
      this.email = email;
    }
  
    public getCpf():
   string {
      return this?.cpf;
    }
  
    public setCpf(cpf: string): void {
      this.cpf = cpf;
    }
  
    public getDataNascimento(): string {
      return this?.dataNascimento;
    }
  
    public setDataNascimento(dataNascimento: string): void {
      this.dataNascimento = dataNascimento;   
  
    }
  
    public getTelefone(): string {
      return this?.telefone;
    }
  
    public setTelefone(telefone: string): void {
      this.telefone = telefone;
    }
  
    public getAltura():   
   string {
      return this?.altura;
    }
  
    public setAltura(altura: string): void {
      this.altura = altura;
    }
  
    public getCep(): string {
      return this?.cep;
    }
  
    public setCep(cep: string): void {
      this.cep = cep;
    }
  
    public getAddress(): string {
      return this?.address;
    }
  
    public setAddress(address: string): void {
      this.address = address;
    }
  
    public getAddressNumber(): string {
      return this?.addressNumber;
    }
  
    public setAddressNumber(addressNumber: string): void {
      this.addressNumber = addressNumber;
    }
  
    public getNeighborhood(): string {
      return this?.neighborhood;
    }
  
    public setNeighborhood(neighborhood: string): void {
      this.neighborhood = neighborhood;
    }
  
    public getCity():   
   string {
      return this?.city;
    }
  
    public setCity(city: string): void {
      this.city = city;
    }
  
    public getUf(): string {
      return this?.uf;
    }
  
    public setUf(uf: string): void {
      this.uf = uf;
    }
  }