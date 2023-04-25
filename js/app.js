'use strict';

function Employee(fullName, employeeId, Department, level, imgURL, salary = 0) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.Department = Department;
    this.level = level;
    this.salary = this.calcSalary();
    this.imgURL = imgURL;
    Employee.allEmployee.push(this);
}

Employee.allEmployee = [];

Employee.prototype.calcEmployeeId = function () {
    this.employeeId = Math.floor(Math.random() * (9999 - 1000) + 1000);
    return this.employeeId;
}

Employee.prototype.calcSalary = function () {
    let salaryA = 0;
    if (this.level === 'Senior') {
        salaryA = Math.floor(Math.random() * (1500 - 1000) + 1000);
    } else if (this.level === 'Mid-Senior') {
        salaryA = Math.floor(Math.random() * (1500 - 1000) + 1000);
    } else if (this.level === 'Junior') {
        salaryA = Math.floor(Math.random() * (1500 - 1000) + 1000);
    }
    return salaryA;
}

Employee.prototype.render = function () {
    const admin = document.getElementById('admin')
    const dev = document.getElementById('dev')
    const fin = document.getElementById('mark')
    const mark = document.getElementById('fin')
    admin.innerHTML = 'Administration';
    dev.innerHTML = 'Development';
    mark.innerHTML = 'Marketing';
    fin.innerHTML = 'Finance';

    for (let i = 0; i < Employee.allEmployee.length; i++) {
        let singleOrder = Employee.allEmployee[i];

        const divEle = document.createElement('div')
        if (singleOrder.Department === "Administration") {
            admin.appendChild(divEle);
        } else if (singleOrder.Department === "Finance") {
            fin.appendChild(divEle)
        } else if (singleOrder.Department === "Marketing") {
            mark.appendChild(divEle)
        } else if (singleOrder.Department === "Development") {
            dev.appendChild(divEle)
        }

        const imgEle = document.createElement('img')
        imgEle.src = singleOrder.imgURL
        imgEle.alt = 'employee img'
        divEle.appendChild(imgEle);

        const p1Ele = document.createElement('p');
        p1Ele.textContent = `Name: ${singleOrder.fullName} - ID: ${singleOrder.employeeId}`;
        divEle.appendChild(p1Ele);

        const p2Ele = document.createElement('p');
        p2Ele.textContent = `Department: ${singleOrder.Department} - Level: ${singleOrder.level}`;
        divEle.appendChild(p2Ele);

        const p3Ele = document.createElement('p');
        p3Ele.textContent = `Salary: ${singleOrder.salary}`
        divEle.appendChild(p3Ele);
    }
}
let employee1 = new Employee('Ghazi Samer', 1000, 'Administration', 'Senior', 'https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true')
let employee2 = new Employee('Lana Ali', 1001, 'Finance', 'Senior', 'https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Lana.jpg?raw=true')
let employee3 = new Employee('Tamara Ayoub', 1002, 'Marketing', 'Senior', 'https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true')
let employee4 = new Employee('Safgggi Walid', 1003, 'Administration', 'Mid-Senior', 'https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Safi.jpg?raw=true')
let employee5 = new Employee('Omar Zaid', 1004, 'Development', 'Senior', 'https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Omar.jpg?raw=true')
let employee6 = new Employee('Rana Saleh', 1005, 'Development', 'Junior', 'https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Rana.jpg?raw=true')
let employee7 = new Employee('Hadi Ahmad', 1006, 'Finance', 'Mid-Senior', 'https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true')



function getInformation(e) {
    if (e && e.preventDefault) {
        e.preventDefault();
        let fullName = e.target.fullName.value;
        let department = e.target.Department.value;
        let level = e.target.Level.value;
        let imgURL = e.target.imgURL.value;

        const newInfo = new Employee(fullName, this.calcEmployeeId, department, level, imgURL)
        newInfo.calcEmployeeId()
        newInfo.render();
        saveData();
    }

}

function saveData() {
    let data = JSON.stringify(Employee.allEmployee);
    localStorage.setItem('employees', data);
}

function getDate() {

    let stringObj = localStorage.getItem('employees');
    let parseObj = JSON.parse(stringObj);
    if (parseObj !== null) {
        Employee.allEmployee = [];
        for (let i = 0; i < parseObj.length; i++) {
            console.log(parseObj[i])
            new Employee(parseObj[i].fullName, parseObj[i].employeeId, parseObj[i].Department, parseObj[i].level, parseObj[i].imgURL, parseObj[i].salary);
        }
        Employee.allEmployee[0].render()
    }
}

const getInfo = document.getElementById('info')
getInfo.addEventListener('submit', getInformation)

getDate();
for(let i =0 ; i<Employee.allEmployee.length ; i++){
    saveData()
    Employee.allEmployee[i].render();
}

//Math.random() * (max - min) + min;