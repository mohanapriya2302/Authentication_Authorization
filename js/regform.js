function registerForm()
{
    var uNameObj = document.getElementById('name1');
    var uName = uNameObj.value;
    var uEmailObj = document.getElementById('mail1');
    var uEmail = uEmailObj.value;
    var uAgeObj = document.getElementById('age1');
    var uAge = uAgeObj.value;
    var uMobileObj = document.getElementById('mob1');
    var uMobile = uMobileObj.value;
    var uPanObj = document.getElementById('pan1');
    var uPan = uPanObj.value;
    var uPwdObj = document.getElementById('pwd1');
    var uPwd= uPwdObj.value;
    var uCpwdObj = document.getElementById('cpwd1');
    var uCpwd = uCpwdObj.value;
    var genderArr = document.getElementsByName('gender');
    var hobbyArr = document.getElementsByName('hob');

if(uName==='')
{
    alert('Please enter name');
    uName.focus;
    return;
}
else
{
    var namePattern = /^[A-Za-z]{2,30}$/;
    var namePatternMatch = namePattern.test(uName);
    if(!namePatternMatch)
    {
        alert("Please enter valid name");
        return;
    }
    
}

if(uEmail==='')
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

if(uAge==='')
{
    alert('Please enter age');
    return;
}

if(uMobile==='')
{
    alert('Please enter mobile no');
    return;
}
else
{
    var mobPattern = /^((91)?|(\+91)?|(0)?)([6-9]{1})([0-9]{9})$/;
    var mobPatternMatch = mobPattern.test(uMobile);
    if(!mobPatternMatch)
    {
        alert("Please enter valid mobile no");
        return;
    }
}

if(uPan==='')
{
    alert('Please enter PAN no');
    return;
}
else
{
    var panPattern = /^([A-Z]{5})([0-9]{4})([A-Z]{1})$/;
    var panPatternMatch = panPattern.test(uPan);
    if(!panPatternMatch)
    {
        alert("Please enter valid PAN no");
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
        alert("Password must contain atleast one capital letter, a special character and a number");
        return;
    }
}

if(uCpwd=='')
{
    alert('Please enter Confirm password');
    return;
}
else
{
    if(uPwd!==uCpwd)
    {
        alert("Confirm Password does not match password");
        return;
    }
}

var genderValue;
var selectedHobbyArr = [];
for(var i = 0; i < genderArr.length; i++)
{
    if(genderArr[i].checked)
    {
        genderValue = genderArr[i].value;
        break;
    }
}
if(genderValue==undefined)
{
    alert('Please select a gender');
    return;  
}

for(var i = 0; i < hobbyArr.length; i++)
{
    if(hobbyArr[i].checked)
    {
        selectedHobbyArr.push(hobbyArr[i].value);
    }
}
if(selectedHobbyArr.length < 2)
{
    alert('Please select minimum 2 hobbies');
    return;  
}

 var registerDetails = 
{
   Name : uName,
   email : uEmail,
   age : uAge,
   mobile : uMobile,
   pan : uPan,
   password : CryptoJS.SHA256(uPwd).toString(),
   confirmpassword : CryptoJS.SHA256(uCpwd).toString(),
   gender : genderValue,
   hobbies : selectedHobbyArr.toString()
};

var UsersArray = [];


detailsFromLocalStorage = JSON.parse(localStorage.getItem('registeredUser'));

if(detailsFromLocalStorage) {
    UsersArray = detailsFromLocalStorage;

    for(var i =0; i < detailsFromLocalStorage.length; i++) 
    {
        userData  = detailsFromLocalStorage[i];
        if(userData.email === registerDetails.email) {
            alert('This user is already exisintg');
            return;
        }
    }
   // alert('Registered successfully');
}

UsersArray.push(registerDetails);
localStorage.setItem('registeredUser',JSON.stringify(UsersArray));
console.log('registerDetails-->', registerDetails);

alert('User registered successfully');
}


