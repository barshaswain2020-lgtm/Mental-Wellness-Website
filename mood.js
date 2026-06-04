let selectedMood = "";

// Mood Data
const moods = {

happy: {
title: "😊 Happy",
quote: "Happiness grows when shared with others.",
sound: "sounds/happy.mp3"
},

sad: {
title: "😔 Sad",
quote: "Every storm eventually runs out of rain.",
sound: "sounds/rain.mp3"
},

angry: {
title: "😡 Angry",
quote: "Take a deep breath. Peace begins with one calm moment.",
sound: "sounds/forest.mp3"
},

tired: {
title: "😓 Tired",
quote: "Rest is not quitting. Rest is preparation.",
sound: "sounds/relax.mp3"
},

energetic: {
title: "🔥 Energetic",
quote: "Your energy introduces you before you even speak.",
sound: "sounds/motivation.mp3"
},

calm: {
title: "😌 Calm",
quote: "Peace comes from within.",
sound: "sounds/ocean.mp3"
}

};

// Show Mood
function showMood(mood){

selectedMood = mood;

document.getElementById("moodName").innerText =
moods[mood].title;

document.getElementById("quote").innerText =
moods[mood].quote;

const audio =
document.getElementById("moodAudio");

audio.src = moods[mood].sound;
audio.load();

}

// Save Mood
function saveMood(){

if(selectedMood === ""){
alert("Please select a mood first");
return;
}

let moodHistory =
JSON.parse(localStorage.getItem("moodHistory")) || [];

moodHistory.push({
date: new Date().toLocaleDateString(),
mood: selectedMood
});

localStorage.setItem(
"moodHistory",
JSON.stringify(moodHistory)
);

document.getElementById("savedMsg").innerHTML =
"✅ Mood saved successfully";

updateChart();
showStats();

}

// Chart
let moodChart;

function updateChart(){

const moodHistory =
JSON.parse(localStorage.getItem("moodHistory")) || [];

const counts = {
happy:0,
sad:0,
angry:0,
tired:0,
energetic:0,
calm:0
};

moodHistory.forEach(item=>{
counts[item.mood]++;
});

const ctx =
document.getElementById("moodChart");

if(moodChart){
moodChart.destroy();
}

moodChart = new Chart(ctx,{
type:"bar",
data:{
labels:Object.keys(counts),
datasets:[{
label:"Mood Count",
data:Object.values(counts)
}]
},
options:{
responsive:true,
maintainAspectRatio:false
}
});

}

// Stats + Streak
function showStats(){

const moodHistory =
JSON.parse(localStorage.getItem("moodHistory")) || [];

document.getElementById("totalEntries").innerText =
moodHistory.length;

let streak = moodHistory.length;

document.getElementById("streak").innerText =
streak;

}

// Clear Data
function clearMoodData(){

if(confirm("Delete all mood records?")){

localStorage.removeItem("moodHistory");

updateChart();
showStats();

document.getElementById("savedMsg").innerHTML =
"🗑️ All records deleted";

}

}

// Load Data On Page Open
window.onload = () => {

updateChart();
showStats();

};