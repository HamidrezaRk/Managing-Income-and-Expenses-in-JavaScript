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
    
makeTodoElement(JSON.parse(localStorage.getItem("Costs")));

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
            const Costs = !localStorage.getItem("Costs") ? [] :
                JSON.parse(localStorage.getItem("Costs"));

            item_two 
            date_input.value = "";

            //item_tree 
            des_input.value = "";

            //item_fore 
            select_bank.value = "";

            //*Discription*
            //Amount of Coust = Am_Coust
            //Date of Coust = Da_Coust
            //Discription of Coust = Dis_Coust
            //Banck of Coust = Ban_Coust

            const currentCoust = {
                Am_Coust: item_one,
                Da_Coust: item_two,
                Dis_Coust: item_tree,
                Ban_Coust:item_fore,
                isCompleted: false,
            };    
            Costs.push(currentCoust);
            localStorage.setItem("Costs", JSON.stringify(Costs));
            //Function add to Html
            makeTodoElement([currentCoust]);
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
        Count_list.textContent=Costobject.Am_Coust;
        Date.textContent=Costobject.Da_Coust;
        Discription.textContent=Costobject.Dis_Coust;
        Bank.textContent=Costobject.Ban_Coust;

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
    sessionStorage.setItem("Coust_Sum",result)
    document.getElementById("sum").innerText=(JSON.parse(sessionStorage.getItem("Coust_Sum"))+ " ریال");
}


document.addEventListener("DOMContentLoaded",main);