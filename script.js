document.getElementById('heightUnit').addEventListener('change', () => {
  const heightUnit = document.getElementById('heightUnit').value;
  const inchesContainer = document.getElementById('inchesContainer');
  inchesContainer.style.display = heightUnit === 'ft' ? 'block' : 'none';
});

function calculateBMI() {
  let height = parseFloat(document.getElementById('height').value);
  let weight = parseFloat(document.getElementById('weight').value);
  const heightUnit = document.getElementById('heightUnit').value;
  const weightUnit = document.getElementById('weightUnit').value;

  // Convert height
  if (heightUnit === 'cm') {
    height = height / 100;
  } else if (heightUnit === 'ft') {
    const inches = parseFloat(document.getElementById('inches').value) || 0;
    height = (height * 12 + inches) * 0.0254;
  }

  // Convert weight
  if (weightUnit === 'lb') {
    weight = weight * 0.453592;
  }

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById('result').innerHTML = '❗ Please enter valid height and weight.';
    return;
  }

  const bmi = weight / (height * height);
  let category = '';
  let advice = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    advice = '💡 Consider a nutritious, calorie-rich diet with regular meals.';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
    advice = '✅ Keep it up! Maintain a balanced diet and regular activity.';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
    advice = '🏃‍♂️ Try light workouts and reduce sugar and fat intake.';
  } else {
    category = 'Obese';
    advice = '⚠️ Consider professional advice. Focus on cardio, portion control, and hydration.';
  }

  document.getElementById('result').innerHTML = `
    Your BMI is <strong>${bmi.toFixed(2)}</strong><br/>
    You are classified as: <strong>${category}</strong><br/>
    ${advice}
  `;
}
