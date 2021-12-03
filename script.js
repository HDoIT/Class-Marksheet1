let index = 1;
let dataTable = document.getElementById("dataTable");
let dataForm = document.getElementById("dataForm");
let dataFormInput = dataForm.getElementsByTagName("input");
let record = [];

// document.querySelectorAll("input").forEach(element => {

// })

document.getElementById("submit").addEventListener("click",submitFunction);
document.getElementById("showAVG").addEventListener("click",showAVGFunction);
document.getElementById("detemineGood").addEventListener("click",detemineFunction);
document.getElementById("clear").addEventListener("click",clearFunction)

let vitri;
 for(let i = 0;i < dataTable.rows.length;i++)
 {
     dataTable.rows[i].onclick = function()
     {
        vitri = this.rowIndex;
        let abc = prompt("nhập vị trí",vitri);
        console.log(vitri);
     };
 }
function clearFunction()
{
        let indexx = prompt("nhập vị trí muốn xóa!");
        dataTable.deleteRow(indexx);
}
function studentScore(fullname,math,physics,chemistry)
{
    this.fullname = fullname;
    this.math = math;
    this.physics = physics;
    this.chemistry = chemistry;
    this.averageScore = '?';
}
function submitFunction()
{
    let i =0;
    let data = [];
    let newRow = dataTable.insertRow(index);
    newRow.insertCell(0);
    for(i=0;i<dataFormInput.length;i++)
    {
        data.push(dataFormInput[i].value);
        newRow.insertCell(i+1);
    }
    newRow.insertCell(5);

    data = data.map(function (item){
        if(parseInt(item)) return parseInt(item);
        else return item;
    })

    let newDataSet = new studentScore(...data);
    record.push(newDataSet);

    newRow.cells[0].innerHTML = index;
    i=1;
    for(const key in newDataSet)
    {
        newRow.cells[i].innerHTML = newDataSet[key];
        i++;
    }

    index++;
    dataForm.reset();
}
function showAVGFunction()
{
    let i,averageScore;
    for(i=1;i<=dataTable.rows.length;i++)
    {
        averageScore = (dataTable.rows[i].cells[2].innerHTML*1+dataTable.rows[i].cells[3].innerHTML*1+
            dataTable.rows[i].cells[4].innerHTML*1)/3;
            dataTable.rows[i].cells[5].innerHTML = Math.round(averageScore*100)/100;
    }
}

function detemineFunction()
{
    let i;
    let row;

    for(i= 1;i<dataTable.rows.length;i++)
    {
        row = dataTable.rows[i];
        if(row.cells[5].innerHTML >= 8.0)
        {
            row.classList.add("table-light","text-danger","font-weight-bold");
        }
    }
}