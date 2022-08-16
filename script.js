function validateform(){
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(name != name.match(/[A-Z][a-z]/))
    {
        alert.messages("Name is required");
        return true;
    }else if(number != number.match(/[6-9]/))
    {
        alert("Number is required");
        return true;
    }else if(email != email.match(/[A-Z][a-z]+@gmail.com/)){
        alert("Email is required");
        return true;
    }else if(password != password.match(/[A-Z][a-z]/)){
        alert("Password is required");
        return true;
    }
    

    console.log('name');
    document.write('name');

}
