var email = document.getElementById("email");
var password = document.getElementById("password");
    function lvalidate()
    {
        var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
    
        if(res.test(email.value)!="1")
        {
            window.alert("Email Is Invalid");
            return false;
        }
        else if(psr.test(password.value)!="1")
        {
            window.alert("Password Is Invalid, try again");
            window.alert("Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number");
    
            return false;
        }
        else
        {
            window.alert("validation Success");
            return true;
        }
        
    }
    