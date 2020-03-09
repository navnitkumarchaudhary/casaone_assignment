
let inputArr = [];

// function to submit the form on the click of submit button
function formSubmit() {
  // First will deal with validation of the form fields
  let inputdiv, input, i, tvRadio, INPUT_VALID = true, RADIO_VALID = false;
  inputArr = [];
  inputdiv = document.getElementById("inputdiv");
  input = inputdiv.getElementsByTagName("input");
  tvRadio = document.querySelector('input[name = tv]:checked');
  document.querySelector('h3').innerHTML = "Add Rules";
  // A loop that checks every input field in the form:
  for (i = 0; i < input.length; i++) {
    // If a field is empty...
    let value = input[i].value;
    if (value == "" || value === 0) {
      // add an "invalid" class to the field:
      input[i].className += " invalid";
      // and set the current input valid status to false
      INPUT_VALID = false;
    } else {
      input[i].className += " valid";
      inputArr.push(value);
    }
  }
  if (tvRadio) {
    document.getElementById('radiodiv').className += " radiovalid";
    tvRadio = tvRadio.value;
    inputArr.push(tvRadio);
    RADIO_VALID = true;
  } else {
    document.getElementById('radiodiv').className += " radioinvalid";
    RADIO_VALID = false;
  }

  if (INPUT_VALID && RADIO_VALID) {
    // for(let i = 0; i< inputArr.length; i++){
    //   alert(inputArr[i]);
    // }
    console.log(inputArr);
    if (inputArr.length == 5) {
      alert("Form submitted successfully");
      //  If monthly rental amount > $1000 and customer age < 21
      if (inputArr[0] > 1000 && inputArr[1] < 21) {
        alert("this order should be reviewed");

        //  If monthly rental amount > $2000 and customer’s zip code is one of the 1,2,3
      } else if (inputArr[0] > 2000 && (inputArr[2] === 1 || inputArr[2] === 2 || inputArr[2] === 3)) {
        alert("this order should be reviewed");

        // If monthly rental amount <= $1000 and has a TV in the order
      } else if (inputArr[0] <= 1000 && inputArr[4] === 1) {
        alert("this order should be reviewed");

        // If rental tenure < 3 months
      } else if (inputArr[3] < 3) {
        alert("this order should be reviewed");
      }
      // document.getElementById("edit").hidden = false;

      // A loop that will make input field value as blank as initial:
      for (i = 0; i < input.length; i++) {
        input[i].value = "";
      }
      // to set radiobutton value as blank as intial value
      inputdiv = document.getElementById("radiodiv");
      input = inputdiv.getElementsByTagName("input");
      for (i = 0; i < input.length; i++) {
        input[i].checked = false;
      }
      document.getElementById("edit").disabled = false;
      document.getElementById("edit").className += " enabled"
      document.getElementById("delete").disabled = false;
      document.getElementById("delete").className += " enabled"
    }

  }
}

// function to edit the form data on the click of edit button
function formEdit() {
  let inputdiv, input, i;
  inputdiv = document.getElementById("inputdiv");
  input = inputdiv.getElementsByTagName("input");
  tvRadio = document.querySelector('input[name = tv]:checked');
  document.querySelector('h3').innerHTML = "Edit Rules";
  // A loop that will set input field value the same while submitting the form:
  if (inputArr && inputArr.length == 5) {
    for (i = 0; i < inputArr.length - 1; i++) {
      let value = inputArr[i];
      input[i].value = value;
    }
    // to set radiobutton value as selected while submitting the form
    inputdiv = document.getElementById("radiodiv");
    input = inputdiv.getElementsByTagName("input");
    for (i = 0; i < input.length; i++) {
      if (input[i].value == inputArr[inputArr.length - 1]) {
        input[i].checked = true;
        break;
      }
    }
  }
}

// function to delete the form data on the click of delete button
function formDelete() {
  console.log("hiii")
  if (inputArr && inputArr.length > 0) {
    inputArr = [];
    alert("Form data has been deleted");
    location.reload();
  }
}


// NOTE: I am not able to send and get the data throuh the mock API you have suggested so just writing a dummy code to 
// to implemment the API. I am using XMLHttpRequest here for API call. 

/*let request = new XMLHttpRequest()

request.open('METHODE_NAME(ex:GET/POST)', 'API_URL', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log(data);
  } else {
    console.error('error')
  }
}

request.send()*/