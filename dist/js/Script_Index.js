const sum_income = JSON.parse(sessionStorage.getItem("Income_Sum"));
const sum_cost=JSON.parse(sessionStorage.getItem("Coust_Sum"));

jam(sum_income,sum_cost);
function jam(sum_income,sum_cost) {
    
    var number1 = parseInt(sum_income);
    var number2 = parseInt(sum_cost);
    var result_savings=number1-number2;
    
    console.log(result_savings);
    document.getElementById("result").innerText=(result_savings+ " ریال");
    sessionStorage.setItem("Total_savings",result_savings)
}