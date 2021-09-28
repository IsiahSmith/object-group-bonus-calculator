const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function bonusLogic(worker) {
  for (let i = 0; i < employees.length; i++) {
    let finalObject = {
      name: worker,
      bonusPercentage: 'null',
      bonusCompensation: 'null',
      totalBonus: 'null'
    }
    if (worker === employees[i].name)






      return finalObject
  }
}; //makes the new object
console.log(bonusLogic('Scout'));
console.log(bonusLogic('Mayella'));
console.log(bonusLogic('Jem'));
console.log(employees);


function totalBonus(array) {
  let noBonus = 0;
  let addedBonus = 0;
  for (let i = 0; i < array.length; i++) {
    if (employees[i].reviewRating === 3) {
      addedBonus = employees[i].annualSalary * .04;
    } else if (employees[i].reviewRating === 4) {
      addedBonus = employees[i].annualSalary * .06;
    } else if (employees[i].reviewRating === 5) {
      addedBonus = employees[i].annualSalary * .1;
    } else {
      noBonus = employees[i].annualSalary / 1;
    }
      console.log((employees[i].annualSalary / 1) + addedBonus);
      console.log(noBonus)
    }
  } //will compute the final employee total bonus INCOMPLETE

  totalBonus(employees);

  function totalComp(array){
    let addedBonus = 0;
    for (let i = 0; i < array.length; i++) {
      if (employees[i].employeeNumber.length === 4){
        addedBonus = employees[i].annualSalary * .05;
      }else{
        addedBonus = employees[i].annualSalary * 0;
      }
    console.log(addedBonus)
  }
  }
  totalComp(employees);
  function bonusCalc(array) {
    let addedBonus = 0;
    for (let i = 0; i < array.length; i++) {
      if (employees[i].reviewRating === 3) {
        addedBonus = employees[i].annualSalary * .04;
      } else if (employees[i].reviewRating === 4) {
        addedBonus = employees[i].annualSalary * .06;
      } else if (employees[i].reviewRating === 5) {
        addedBonus = employees[i].annualSalary * .1;
      } else if (employees[i].reviewRating < 3) {
        addedBonus = employees[i].annualSalary * 0;
      }
      console.log(addedBonus);
    }
  }

  bonusCalc(employees);


