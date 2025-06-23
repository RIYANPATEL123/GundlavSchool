var firebaseConfig = {
  apiKey: "AIzaSyC-FStD8QelLa2TiSbYSuflz8hPAiGrd0k",
  authDomain: "project-e982c.firebaseapp.com",
  databaseURL: "https://project-e982c-default-rtdb.firebaseio.com",
  projectId: "project-e982c",
  storageBucket: "project-e982c.appspot.com",
  messagingSenderId: "852072639342",
  appId: "1:852072639342:web:e468c65e7dd6d76b262f7f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var UserInputsRef=firebase.database().ref('UserInputs')
  document.getElementById('testForm').addEventListener('submit',submitForm);
  function submitForm(e){
    e.preventDefault();
    var fname =getInputVal('firstname');
    var lname =getInputVal('lastname');
    var mobile =getInputVal('mobile');
    var state =getInputVal('state');
    state=state.toLowerCase();
    readState(state);
    var email =getInputVal('email');
    var emailstatus=validateEmail();
    var profession =getInputVal('profession');
    var dateofbirth =getInputVal('dateofbirth');
    var symptomsList =getSelectedCheckboxValues('symptoms');
    var selectedOption = document.querySelector('input[name = option]:checked').value;
    if(emailstatus)
    saveMessages(lname+ " " +fname,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList);
}

function readState(state){
    var centers;
    var ref = firebase.database().ref(state);
    ref.on('value', (data) => {
     centers = data.val();
     document.getElementById("result").innerHTML ="<br>"+centers.toUpperCase();
})

}
function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessages(name,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList){
    var newuserInputsRef = UserInputsRef.push( );
    newuserInputsRef.set({
        name:name,
        mobile:mobile,
        email:email,
        profession:profession,
        dateofbirth:dateofbirth,
        selectedOption:selectedOption,
        state:state, 
        symptomsList:symptomsList
    })
    alert("Thank you, find the list of centers nearby!  ");
}




function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}



