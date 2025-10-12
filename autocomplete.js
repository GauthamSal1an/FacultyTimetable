let availableKeywords = [
    'Dr. Niranjan N. Chiplunkar',
    'Dr. Jyothi Shetty',
    'Mr. Piyush Goel',
    'Dr. Venkataramana Bhat P',
    'Dr. Sarika Hegde',
    'Dr. Sudeepa K B',
    'Dr. Shashank Shetty'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>"
    })

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
document.querySelector(".button").onclick = function () {
  const name = document.getElementById("input-box").value.trim();
  const output = document.querySelector(".result");
  const facultyDisplay = document.querySelector(".Facultyname");
  facultyDisplay.textContent = name +"'s Timetable";
    

  fetch("Faculty_timetable.csv")
    .then(res => res.text())
    .then(text => {
      const lines = text.split("\n");
      const header = lines[0].split(",");
      let result = "<table class='table' border='1' style='margin-top:20px; color:white;'>";

      result += "<tr>";
      header.slice(1).forEach(h => result += `<th>${h}</th>`); // Skip first column
      result += "</tr>";

      for (let i = 1; i < lines.length; i++) {
        const row = lines[i].split(",");
        if (row[0].trim() === name) {
          result += "<tr>";
          row.slice(1).forEach(cell => result += `<td>${cell}</td>`); // Skip first column
          result += "</tr>";
        }
      }

      result += "</table>";
      output.innerHTML = result;
    })
    .catch(err => {
      output.innerHTML = "<p style='color:white;'>Error loading timetable.</p>";
      console.error(err);
    });
};