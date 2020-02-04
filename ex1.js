class Usuario {
  constructor(email, senha) {
    this.admin = false;
    this.email = email;
    this.senha = senha;
  }

  setIsAdmin(isAdmin) {
    this.admin = isAdmin;
  }

  isAdmin() {
    return this.admin;
  }

  getEmail() {
    return this.email;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.setIsAdmin(true);
  }
}

const User1 = new Usuario("nayara@teste.com", "senha123");
const Adm1 = new Admin("guilherme@teste.com", "senha123");

console.log(User1.isAdmin()); // false
console.log("email : ", User1.email);
console.log(Adm1.isAdmin()); // true
console.log("email : ", Adm1.email);
