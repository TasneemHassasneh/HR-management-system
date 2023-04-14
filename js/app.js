'use strict';

let employee1=new Employee(1000,'Ghazi Samer','Administration','Senior')
let employee2=new Employee(1001,'Lana Ali','finance','Senior')
let employee3=new Employee(1002,'Tamara Ayoub','Marketing','Senior')
let employee4=new Employee(1003,'Safi Walid','Administration','Mid-Senior')
let employee5=new Employee(1004,'Omar Zaid','Development','Senior')
let employee6=new Employee(1005,'Rana Saleh','Development','Junior')
let employee7=new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior')

function Employee(employeeId,fullName,Department,level){
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.Department=Department;
    this.level=level;
}

Employee.prototype.salary = function(){
    let salary = 0;
    if(this.level==='Senior'){
        salary=Math.random() * (2000 - 1500) + 1500;
    }else if(this.level==='Mid-Senior'){
        salary=Math.random() * (1500 - 1000) + 1000;
    }else if(this.level==='Junior'){
        salary=Math.random() * (1000 - 500) + 500;
    }
    return salary;
}


//

Employee.prototype.print = function(){
    let par = `Employee name : ${this.fullName}, salary : ${this.salary()}.`;
    return par;
}

const e1 = document.createElement('p');
e1.textContent=employee1.print();

const e2= document.createElement('p');
e2.textContent=employee2.print();

const e3= document.createElement('p');
e3.textContent=employee3.print();

const e4= document.createElement('p');
e4.textContent=employee4.print();

const e5= document.createElement('p');
e5.textContent=employee5.print();

const e6= document.createElement('p');
e6.textContent=employee6.print();

const e7= document.createElement('p');
e7.textContent=employee7.print();

const parentEle = document.getElementById('employees-information');
parentEle.appendChild(e1)
parentEle.appendChild(e2)
parentEle.appendChild(e3)
parentEle.appendChild(e4)
parentEle.appendChild(e5)
parentEle.appendChild(e6)
parentEle.appendChild(e7)

//parentEle.appendChild(e2)

//



//Math.random() * (max - min) + min;