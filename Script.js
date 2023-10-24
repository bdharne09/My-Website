function validateForm() {
    let valid = true;
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
   
    if ( name.length < 3 ) {
      alert("name length must be of length 3-15 characters.")
      valid = false;
    }
    
    if ( email.length>35 && email.length<7 ) {
      alert("please enter valid email.")
      valid = false;
    } 

    return valid;
  }