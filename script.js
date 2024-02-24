counter = 1;
function myFunction() {
  if (counter === 1) {
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'block';
    counter++;
  } else if (counter === 2) {
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'block';
    counter++;
  } else {
    document.getElementById('question3').style.display = 'none';
    document.getElementById('finished').style.display = 'block';
    counter++;
  }


}

