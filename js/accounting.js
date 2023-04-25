'use strict';
console.log('connected to HTML')

    /*let employeeNumber=0, totalSalary=0,salaryAvg =0;
    let administrationNumber=0, administrationTotalSalary=0,administrationSalaryAvg =0;
    let financeNumber=0, financeTotalSalary=0,financeSalaryAvg =0;
    let marketingNumber=0, marketingTotalSalary=0,marketingSalaryAvg =0;
    let developmentNumber=0, developmentTotalSalary=0,developmentSalaryAvg =0;

    let stringObj = localStorage.getItem('employees');
    let parseObj = JSON.parse(stringObj);
    console.log(parseObj)
    if(parseObj !== null) {
        for(let i = 0; i < parseObj.length; i++) {
                employeeNumber += 1;
           totalSalary += parseObj[i].salary
            
            if(parseObj[i].Department==='Administration'){
                administrationNumber += 1;
                administrationTotalSalary += parseObj[i].salary
            }

            if(parseObj[i].Department==='Finance'){
                financeNumber += 1;
                financeTotalSalary += parseObj[i].salary
            }

            if(parseObj[i].Department==='Marketing'){
                marketingNumber += 1;
                marketingTotalSalary += parseObj[i].salary
            }
            if(parseObj[i].Department==='Development'){
                developmentNumber += 1;
                developmentTotalSalary += parseObj[i].salary
            }
            
        }
        salaryAvg = Math.floor(totalSalary/employeeNumber);
        administrationSalaryAvg=Math.floor(administrationTotalSalary/administrationNumber)
        financeSalaryAvg=Math.floor(financeTotalSalary/financeNumber)
        marketingSalaryAvg=Math.floor(marketingTotalSalary/marketingNumber)
        developmentSalaryAvg=Math.floor(developmentTotalSalary/developmentNumber)
       
        
    }
    let AdministrationArr=[administrationNumber,administrationSalaryAvg,administrationTotalSalary]
    let DevelopmentArr=[developmentNumber,developmentSalaryAvg,developmentTotalSalary]
    let MarketingArr=[marketingNumber,marketingSalaryAvg,marketingTotalSalary]
    let FinanceArr=[financeNumber,financeSalaryAvg,financeTotalSalary]
    let totalInfoArr=[employeeNumber,salaryAvg,totalSalary]
   
    createTableElement('Administration',AdministrationArr)
    createTableElement('Development',DevelopmentArr)
    createTableElement('Marketing',MarketingArr)
    createTableElement('Finance',FinanceArr)
    createTableElement('total-info',totalInfoArr)

function createTableElement(str,arr){
    const box = document.getElementById(str)
    for(let i = 0 ; i <3; i++){
       
    const tdEle = document.createElement('td');
    box.appendChild(tdEle)
    if(i === 1 || i===2){
        tdEle.textContent=`${arr[i]} $`
    }else{
        tdEle.textContent=`${arr[i]}`
    }
    
}
}*/


const employees = JSON.parse(localStorage.getItem("employees"));


const departments = {};

employees.forEach(emp => {
  if (!departments[emp.Department]) {
    departments[emp.Department] = {
      name: emp.Department,
      numEmployees: 0,
      totalSalary: 0
    };
  }
  
  departments[emp.Department].numEmployees++;
  departments[emp.Department].totalSalary += emp.salary;
});


Object.values(departments).forEach(dept => {
  dept.avgSalary = dept.totalSalary / dept.numEmployees;
});


const totalNumEmployees = employees.length;
const totalAvgSalary = Object.values(departments).reduce((total, dept) => total + dept.avgSalary, 0) / Object.values(departments).length;
const totalSalary = Object.values(departments).reduce((total, dept) => total + dept.totalSalary, 0);


let tableHtml = "<table><thead><tr><th>Department Name</th><th>Number of Employees</th><th>Average Salary</th><th>Total Salary</th></tr></thead><tbody>";

Object.values(departments).forEach(dept => {
  tableHtml += `<tr><td>${dept.name}</td><td>${dept.numEmployees}</td><td>${dept.avgSalary}</td><td>${dept.totalSalary}</td></tr>`;
});

tableHtml += `<tfoot><tr><td>Total</td><td>${totalNumEmployees}</td><td>${totalAvgSalary}</td><td>${totalSalary}</td></tr></tfoot></table>`;


document.getElementById("table-container").innerHTML = tableHtml;

console.log(Object.values(departments))








