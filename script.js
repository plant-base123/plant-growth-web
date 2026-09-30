const button = document.querySelector("button");
const heightInput = document.querySelector("#height");
const leavesInput = document.querySelector("#leaves");
const recordList = document.querySelector("#recordList");
const memoInput = document.querySelector("#memo");
button.addEventListener("click",function () {
    const height = heightInput.valueAsNumber;
    const leaves = leavesInput.valueAsNumber; 
    const memo = memoInput.value;
    const date = new Date().toLocaleDateString();
    if (Number.isNaN(height)|| Number.isNaN(leaves)){
        alert("高さと葉の枚数を入力してください。");
        return;}
    const record = {height:height,leaves:leaves,memo:memo,date:date};
    records.push(record);
    localStorage.setItem("records",JSON.stringify(records));
    dispalayRecord(record);
    alert("記録しました！");});
const savedRecords = localStorage.getItem("records");
let records;
if(savedRecords === null){
    records = [];
}else{
    records = JSON.parse(savedRecords);
}
function dispalayRecord(record){
    const recordItem = document.createElement("p");
    recordItem.textContent = record.date + "高さ:" + record.height + "cm 葉の枚数:" + record.leaves + "枚 メモ:" + record.memo;
    recordList.appendChild(recordItem);}
records.forEach(function(record){
    dispalayRecord(record);});
