'use strict';

function Employee(employeeId,fullName,Department,level,salary){
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.Department=Department;
    this.level=level;
    this.salary=this.calcSalary();
}

/*Employee.prototype.employeeId=function(){
    this.employeeId = Math.floor(Math.random() * (9999 - 1000) +1000);
    return this.employeeId;
}*/

Employee.prototype.calcSalary = function(){
    let salaryA = 0;
    if(this.level==='Senior'){
        salaryA=Math.random() * (2000 - 1500) + 1500;
    }else if(this.level==='Mid-Senior'){
        salaryA=Math.random() * (1500 - 1000) + 1000;
    }else if(this.level==='Junior'){
        salaryA=Math.random() * (1000 - 500) + 500;
    }
    return salaryA;
}

let employee1=new Employee(1000,'Ghazi Samer','Administration','Senior')
let employee2=new Employee(1001,'Lana Ali','finance','Senior')
let employee3=new Employee(1002,'Tamara Ayoub','Marketing','Senior')
let employee4=new Employee(1003,'Safi Walid','Administration','Mid-Senior')
let employee5=new Employee(1004,'Omar Zaid','Development','Senior')
let employee6=new Employee(1005,'Rana Saleh','Development','Junior')
let employee7=new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior')

//

Employee.prototype.print = function(){
    let par = `Employee name : ${this.fullName}, salary : ${this.salary}.`;
    const p = document.createElement('p');
    p.textContent=par
    const parentEle = document.getElementById('employees-information');
    parentEle.appendChild(p)
    return par;
}
let arr = [employee1,employee2,employee3,employee4,employee5,employee6,employee7]
for(let i=0 ;i < arr.length;i++){
    arr[i].print();
}
//

//Math.random() * (max - min) + min;