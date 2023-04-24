'use strict';
console.log('connected to HTML')
function getDate(){
    let employeeNumber=0, totalSalary=0,salaryAvg =0;
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
        salaryAvg = totalSalary/employeeNumber;
        administrationSalaryAvg=administrationTotalSalary/administrationNumber
        financeSalaryAvg=financeTotalSalary/financeNumber
        marketingSalaryAvg=marketingTotalSalary/marketingNumber
        developmentSalaryAvg=developmentTotalSalary/developmentNumber
        console.log("   All Employee , Administration, Finance, Marketing, Development")
        console.log(`Number:  ${employeeNumber} , ${administrationNumber} , ${financeNumber} , ${marketingNumber} , ${developmentNumber}`)
        console.log(`salaryAvg: ${Math.floor(salaryAvg)} , ${Math.floor(administrationSalaryAvg)} , ${financeSalaryAvg} , ${marketingSalaryAvg} , ${developmentSalaryAvg}`)
        console.log(`Total Salary: ${totalSalary} , ${administrationTotalSalary} , ${financeTotalSalary} , ${marketingTotalSalary} , ${developmentTotalSalary}`)
      }
  }
getDate()





