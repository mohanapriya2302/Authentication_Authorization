

 var detailsFromLocalStorage = JSON.parse(localStorage.getItem('registeredUser'));
 
 userStr = '';
for(var i = 0; i < detailsFromLocalStorage.length; i++) 
{
    var userObj  = detailsFromLocalStorage[i];
  
    userStr += '<tr> <td>' + userObj.Name + '</td> <td>' + userObj.email + '</td><td>' + userObj.age + '</td> <td>' + userObj.gender + '</td> <td>' + userObj.pan + '</td><td>' + userObj.hobbies.toString() + '</td></tr>';
}


document.getElementById('tbodyData').innerHTML = userStr;


