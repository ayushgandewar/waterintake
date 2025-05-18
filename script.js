const totalCups = 8;
let currentCount = 0;
let lastFactIndex = -1;

const fill = document.getElementById('fill');
const countText = document.getElementById('count');
const goalMsg = document.getElementById('goalMsg');
const motivationMsg = document.getElementById('motivationMsg');
const factBox = document.getElementById('factBox');
const buttonsContainer = document.getElementById('buttons');

const facts = [
  "Drinking water can improve brain function and boost mood.",
  "Staying hydrated helps your skin glow naturally.",
  "Water helps in digestion and nutrient absorption.",
  "Cold water can help burn more calories!",
  "Even mild dehydration can cause fatigue.",
  "Water regulates body temperature efficiently.",
  "Hydrated muscles perform better during workouts.",
  "Water flushes out toxins from your body.",
  "A hydrated body reduces the risk of headaches.",
  "Drinking enough water can curb overeating.",
];

for (let i = 0; i < totalCups; i++) {
  const btn = document.createElement('button');
  btn.className = 'glass-btn';
  btn.innerText = '🥤';
  btn.onclick = () => drinkWater(i);
  buttonsContainer.appendChild(btn);
}

function drinkWater(index) {
  const buttons = document.querySelectorAll('.glass-btn');
  if (buttons[index].classList.contains('active')) return;

  buttons[index].classList.add('active');
  buttons[index].innerText = '✅';
  currentCount++;
  updateUI();
  showRandomFact();
}

function updateUI() {
  const percent = (currentCount / totalCups) * 100;
  fill.style.height = percent + '%';
  countText.textContent = `${currentCount} / ${totalCups} cups`;

  const remaining = totalCups - currentCount;
  if (currentCount >= totalCups) {
    goalMsg.classList.remove('hidden');
    motivationMsg.textContent = "You're fully hydrated! 🥳";
  } else {
    goalMsg.classList.add('hidden');
    if (remaining === 1) {
      motivationMsg.textContent = "Just 1 more glass to go! 💪";
    } else if (currentCount >= 6) {
      motivationMsg.textContent = "Almost there! Keep sipping! 🚀";
    } else if (currentCount >= 4) {
      motivationMsg.textContent = "Halfway there! 🙌";
    } else if (currentCount > 0) {
      motivationMsg.textContent = "Great start! Keep going! 💧";
    } else {
      motivationMsg.textContent = "";
    }
  }
}

function showRandomFact() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * facts.length);
  } while (randomIndex === lastFactIndex);
  lastFactIndex = randomIndex;

  factBox.innerHTML = `✨ <strong>Fun Fact of the Day</strong> ✨ <br>${facts[randomIndex]}`;
}

function resetTracker() {
  currentCount = 0;
  fill.style.height = '0%';
  countText.textContent = `0 / ${totalCups} cups`;
  goalMsg.classList.add('hidden');
  motivationMsg.textContent = '';
  lastFactIndex = -1;

  const buttons = document.querySelectorAll('.glass-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    btn.innerText = '🥤';
  });

  factBox.innerHTML = `✨ <strong>Fun Fact of the Day</strong> ✨ <br>Your body is about 60% water, and your brain is roughly 73% water.`;
}
