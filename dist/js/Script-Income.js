//Btn
const btn_add=document.querySelector("#data_sub");
//input_date
const date_input=document.getElementById("input_date");
//Coust_Input
const cost_input=document.getElementById("input_cost");
//input_des
const des_input=document.getElementById("input_des");
//select_bank
const select_bank=document.getElementById("select_bank");
//In Tabel table
const table=document.getElementById("example1");
function main() {
    
makeTodoElement(JSON.parse(localStorage.getItem("Income")));

//Add Coust in LocalStorage
    btn_add.addEventListener("click",()=>{
        
        // Set Input
        
        const item_one =cost_input.value.trim();
        const item_two =date_input.value.trim();
        const item_tree =des_input.value.trim();
        const item_fore =select_bank.value.trim();
        if(item_one ){
            //item_one
            cost_input.value = "";
            const Income = !localStorage.getItem("Income") ? [] :
                JSON.parse(localStorage.getItem("Income"));

            item_two 
            date_input.value = "";

            //item_tree 
            des_input.value = "";

            //item_fore 
            select_bank.value = "";

            //*Discription*
            //Amount of income = Am_income
            //Date of income = Da_income
            //Discription of income = Dis_income
            //Banck of income = Ban_income

            const currentIncome = {
                Am_income: item_one,
                Da_income: item_two,
                Dis_income: item_tree,
                Ban_income:item_fore,
                isCompleted: false,
            };    
            Income.push(currentIncome);
            localStorage.setItem("Income", JSON.stringify(Income));
            //Function add to Html
            makeTodoElement([currentIncome]);
            jam(item_one);
        }
    });    
     
};

//Set Data in Html
function makeTodoElement(CostArray) {
    if (!CostArray) {
        return null;
    }

    CostArray.forEach((Costobject) => {
        //Create Html Elements Of Todo

        //tr
        const tr = document.createElement("tr");
        //td
        const Count_list = document.createElement("td");
        const Date = document.createElement("td");
        const Discription = document.createElement("td");
        const Bank = document.createElement("td");

        //Add class 
        tr.classList.add('List_tr');
        Count_list.classList.add('Count_list');
        Date.classList.add('Date_list');
        Discription.classList.add('Discription_list');
        Bank.classList.add('Bank_list');

        //set value
        Count_list.textContent=Costobject.Am_income;
        Date.textContent=Costobject. Da_income;
        Discription.textContent=Costobject. Dis_income;
        Bank.textContent=Costobject.Ban_income;

        //append chaild
        tr.appendChild(Count_list);
        tr.appendChild(Date);
        tr.appendChild(Discription);
        tr.appendChild(Bank);

        table.appendChild(tr);
    });
}

var privent=0;  
function jam(a) {
    
    var number1 = parseInt(a);
    
    var result=number1+privent;
    privent=result;
    sessionStorage.setItem("Income_Sum",result)
    document.getElementById("sum").innerText=(JSON.parse(sessionStorage.getItem("Income_Sum"))+ " ریال");
}


document.addEventListener("DOMContentLoaded",main);