'use strict';

function Employee(fullName,employeeId,Department,level,imgURL){
    this.employeeId=employeeId;
    this.fullName=fullName;
    this.Department=Department;
    this.level=level;
    this.salary=this.calcSalary();
    this.imgURL=imgURL;
}

Employee.prototype.calcEmployeeId=function(){
    this.employeeId = Math.floor(Math.random() * (9999 - 1000) +1000);
    return this.employeeId;
}

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
 
let employee1=new Employee('Ghazi Samer',1000,'Administration','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true')
let employee2=new Employee('Lana Ali',1001,'finance','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Lana.jpg?raw=true')
let employee3=new Employee('Tamara Ayoub',1002,'Marketing','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true')
let employee4=new Employee('Safgggi Walid',1003,'Administration','Mid-Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Safi.jpg?raw=true')
let employee5=new Employee('Omar Zaid',1004,'Development','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Omar.jpg?raw=true')
let employee6=new Employee('Rana Saleh',1005,'Development','Junior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Rana.jpg?raw=true')
let employee7=new Employee('Hadi Ahmad',1006,'Finance','Mid-Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true')
//

Employee.prototype.render1 = function(){
    const admin= document.getElementById('admin')
    const dev= document.getElementById('dev')
    const fin= document.getElementById('mark')
    const mark= document.getElementById('fin')

    const divEle = document.createElement('div')
    if(this.Department==="Administration"){
        admin.appendChild(divEle);
    }else if(this.Department==="finance"){
        fin.appendChild(divEle)
    }else if(this.Department==="Marketing"){
        mark.appendChild(divEle)
    }else if(this.Department==="Development"){
        dev.appendChild(divEle)
    }
    

    const imgEle = document.createElement('img')
    imgEle.src=this.imgURL
    imgEle.alt='employee img'
    divEle.appendChild(imgEle);   

    const p1Ele = document.createElement('p');
    p1Ele.textContent = `Name: ${this.fullName} - ID: ${this.employeeId}`;
    divEle.appendChild(p1Ele);

    const p2Ele = document.createElement('p');
    p2Ele.textContent = `Department: ${this.Department} - Level: ${this.level}`;
    divEle.appendChild(p2Ele);

    
}
Employee.prototype.render2 = function(){
    const admin= document.getElementById('admin')
    const dev= document.getElementById('dev')
    const fin= document.getElementById('mark')
    const mark= document.getElementById('fin')

    const divEle = document.createElement('div')
    if(this.Department==="Administration"){
        admin.appendChild(divEle);
    }else if(this.Department==="finance"){
        fin.appendChild(divEle)
    }else if(this.Department==="Marketing"){
        mark.appendChild(divEle)
    }else if(this.Department==="Development"){
        dev.appendChild(divEle)
    }

    const imgEle = document.createElement('img')
    imgEle.src=this.imgURL
    imgEle.alt='employee img'
    divEle.appendChild(imgEle);   

    const p1Ele = document.createElement('p');
    p1Ele.textContent = `Name: ${this.fullName} - ID: ${this.employeeId}`;
    divEle.appendChild(p1Ele);

    const p2Ele = document.createElement('p');
    p2Ele.textContent = `Department: ${this.Department} - Level: ${this.level}`;
    divEle.appendChild(p2Ele); 
}


let arr = [employee1,employee2,employee3,employee4,employee5,employee6,employee7]
for(let i=0 ;i < arr.length;i++){
    arr[i].render1();
}

function getInformation(e){
    if (e && e.preventDefault) { e.preventDefault(); 
        let fullName = e.target.fullName.value;
        let department = e.target.Department.value;
        let level = e.target.Level.value;
        let imgURL = e.target.imgURL.value;
    
        const newInfo = new Employee(fullName,this.calcEmployeeId,department,level,imgURL)
        newInfo.calcEmployeeId()
        newInfo.render2();}
    
}

const getInfo = document.getElementById('info')
getInfo.addEventListener('submit',getInformation)



//Math.random() * (max - min) + min;