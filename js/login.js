function login() {
    var uEmail = document.getElementById('mail1').value;
    var uPwd = document.getElementById('pwd1').value;

    if(uEmail =='')
{
    alert('Please enter mail ID');
    return;
}
else
{
    var mailPattern = /^[A-Za-z0-9]{2,}@[A-Za-z0-9]{2,}\.[a-zA-Z0-9]{2,3}$/;
    var mailPatternMatch = mailPattern.test(uEmail);
    if(!mailPatternMatch)
    {
        alert("Please enter valid mail ID");
        return;
    }
}

if(uPwd=='')
{
    alert('Please enter password');
    return;
}
else
{
    var pwdPattern = /^(?=.*[A-Z])(?=.*[a=z])(?=.*[0-9])[\w#$@&!]{8,20}$/;
    var pwdPatternMatch = pwdPattern.test(uPwd);
    if(!pwdPatternMatch)
    {
        alert("Incorrect Password");
        return;
    }
}
 var pwdStr = CryptoJS.SHA256(uPwd).toString();
 var detailsFromLocalStorage = JSON.parse(localStorage.getItem('registeredUser'));

 
    var isuserLogged = false;
   
    for(var i =0; i < detailsFromLocalStorage.length; i++) 
    {
       userData  = detailsFromLocalStorage[i];
       if(userData.email == uEmail && userData.password == pwdStr) 
        {
            alert('User logged in Successfully');
            isuserLogged=true;
            location.href = "home.html";
            //return;
        }
        
    } 
    


   if(!isuserLogged) 
    {
        alert('Please check your credentials');
    }
  
}








