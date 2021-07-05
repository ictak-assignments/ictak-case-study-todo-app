var loadAjax = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhr.send();
    xhr.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
                var htmlData = JSON.parse(xhr.responseText);
                var htmlContent =""
                for(var i =0; i<htmlData.length; i++){
                    var currentRecord = htmlData[i];
                    //htmlContent += "<tr><td>"+currentRecord.id+"</td><td>"+currentRecord.title+"</td><td><input type='checkbox' name='test' value="+currentRecord.completed+"></td></tr>"
                    htmlContent += `<tr><td>Task ${currentRecord.id}</td><td>${currentRecord.title}</td><td><input type='checkbox' onclick="calculateCheckedCheckboxes()"  name='test' value=${currentRecord.completed}></td></tr>`
                }

            let tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = htmlContent;
            function checkCompletedAndDisableIt(){
                            let checkboxes = document.querySelectorAll("input[value = true]");
                            for(let checkbox of checkboxes){
                                checkbox.setAttribute("checked","checked");
                                checkbox.setAttribute("disabled",true);
                                
                            }
            }
            checkCompletedAndDisableIt();
        }
    }
}

// let numberOfCompletedCheckBox = document.querySelectorAll("input[value = true").length;
// let markCompleted = function(){
//     if(numberOfCompletedCheckBox>=95){
//         alert("congratulation you have completed 5 tasks ")
//     }
// }

// let checkboxes = document.querySelectorAll("input[value = false]")
// for(let checkbox of checkboxes){
//     addEventListener('click',()=>{
//         console.log(1)
//     })
// }

function calculateCheckedCheckboxes(){
    function showMessage() {
        alert("Congratulations...! You completed 5 Tasks")
        location.reload();
    }
    let Count = new Promise(function(Resolve, Reject) {
        var Checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
        x=Checkbox.length;
        if (x == 95) {
        Resolve("OK");
        } 
    });

    Count.then(function() {
        showMessage();
    });
}