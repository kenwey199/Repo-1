let totalInheritance = +prompt("enter Inheritance");
let numberofChildern = +prompt("enter Number Of Childern")
let boysNum = +prompt("enter number of boys");
let girlsNum = +prompt("Enter number of girls ");
let ifThereWife = prompt("have wife (Yes/ NO) ?")

let inheraitanceDivision = girlsNum + (2 * boysNum) ;

if (ifThereWife === "yes") {
    let Inheritanceforwife = totalInheritance / 8;
    let restofinheritance = totalInheritance - Inheritanceforwife;
    let girlinheraitance = restofinheritance / inheraitanceDivision;
    let boyiheraitance = girlinheraitance * 2;
    console.log(` wife share= ${Inheritanceforwife} boys Share=  ${boyiheraitance} girls share= ${girlinheraitance}`)

} else {
    let girlinheraitance = totalInheritance / inheraitanceDivision;
    let boyiheraitance = girlinheraitance * 2;
    console.log(` boys Share=  ${boyiheraitance} girls share ${girlinheraitance}`)
}

