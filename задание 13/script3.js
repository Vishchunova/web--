let calculateSalary = function (dirtySalary) {
let cleanSalary;
if(dirtySalary>=100000){
cleanSalary = Math.round(dirtySalary-(dirtySalary*0.45));
}else{
cleanSalary = Math.round(dirtySalary-(dirtySalary*0.35));
}
return cleanSalary;
};
