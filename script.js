//inverts the JS logo on the webpage
const jsLogo = document.getElementById("jsLogo");
jsLogo.addEventListener("mouseover", function () {
  jsLogo.style.filter = "invert(100%)";
});
jsLogo.addEventListener("mouseout", function () {
  jsLogo.style.filter = "invert(0%)";
});

//quiz results
const submitBtn = document.getElementById("submitbtn");
submitBtn.addEventListener("click", function () {
  let score = 0;
  let answers = ["h7", "vw", "23"];
  let inputs = document.getElementsByTagName("input");
  console.log(inputs);
  const userAnswers = [];
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      userAnswers.push(inputs[i].value);
    }
  }
  for (let j = 0; j < answers.length; j++) {
    if (answers[j] == userAnswers[j]) {
      score++;
    }
  }
  let result = document.getElementById("results");
  result.style.color = "#90ee90";
  result.textContent = "Congratulations, your score is " + score + "!";
});


