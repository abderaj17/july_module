let employees = [];
let employeeId = 1;

function addEmployee(){
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;
    const messageElement = document.getElementById('message');

    if(name==="" || profession === "" || age===""){
        messageElement.innerHTML = "Error: All fields are required!";
        messageElement.style.color = "red";
    }else{
        const employee = {
            id:employeeId++,
            name:name,
            profession:profession,
            age:parseInt(age)
        };
        employees.push(employee);
        displayEmployees();
        messageElement.innerHTML= "Success: Employee added!";
        messageElement.style.color= "green";

        document.getElementById('name').value= '';
        document.getElementById('profession').value='';
        document.getElementById('age').value='';

    }
}
function displayEmployees(){
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
    employees.forEach(employee=>{
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';

        employeeDiv.innerHTML=`
        <p>${employee.id}. Name: ${employee.name} Profession: ${employee.profession} Age:{employee.age}</p>
        <button onclick="deleteEmployees(${employee.id})">Delete User</button>
        `;

        employeeList.appendChild(employeeDiv);
    });
}

function deleteEmployees(id){
    employees = employees.filter(employee=> employee.id!==id);
    displayEmployees();
}