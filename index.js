function validateForm(){
    var fname = document.forms.myForm.fname.value;
    var lname = document.forms.myForm.lname.value;
    var email = document.forms.myForm.email.value;
    var password = document.forms.myForm.pass.value;
    
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
    var regName =/\d+$/g;

    if (fname == "" || regName.test(fname)) {
        
        alert("Please enter your First name properly.");
        
        return false;
    }
     if (lname == "" || regName.test(lname)) {
        window.alert("Please enter your last name properly.");
        
        return false;
    }
     if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
         return false;
    }
     if( password == "" ) {
        alert("Please enter your Password properly.");
         return false;
    }
     
   save();
    
    
  }
  function save(){
       
       localStorage.setItem("fname", document.forms["myForm"]["fname"].value)
       localStorage.setItem("lname", document.forms["myForm"]["lname"].value)
      
  }
  