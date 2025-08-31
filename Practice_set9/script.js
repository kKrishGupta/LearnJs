let DATA = "secret information";
class User{
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
  viewData(){
    console.log("data = ",DATA);
  }
}

let student1 = new User("aman","abc@gmail.com");
let student2 = new User("shradha" , "aanki@gmail.com");
let teacher1 = new User("teacher");


class Admin extends User{
  constructor(name,email){
    super(name,email);
  }
  editData(){
    DATA = "some new values";
  }
}

let admin1 = new Admin("admin", "admin@college.com");
