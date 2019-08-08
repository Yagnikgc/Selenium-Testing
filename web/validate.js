

function validateAll() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var make = document.getElementById("make").value;
    var model = document.getElementById("model").value;
    var year = document.getElementById("year").value;

    var isValid = true;
    if(name.trim() == ""){
        document.getElementById("errorName").innerHTML = "Please Enter Name";
        isValid = false;
    }
    else{
        document.getElementById("errorName").innerHTML = "";
    }
    if(address.trim() == ""){
        document.getElementById("errorAddress").innerHTML = "Please Enter Address";
        isValid = false;
    }
    else{
        document.getElementById("errorAddress").innerHTML = "";
    }
    if(city.trim() == ""){
        document.getElementById("errorCity").innerHTML = "Please Enter City";
        isValid = false;
    }
    else{
        document.getElementById("errorCity").innerHTML = "";
    }
    var regExPhone = /^\d{3}-\d{3}-\d{4}$/;
    if(phoneNumber.trim() == ""){
        document.getElementById("errorPhone").innerHTML = "Please Enter Phone Number";
        isValid = false;
    }
    else if(!phoneNumber.match(regExPhone)){
        document.getElementById("errorPhone").innerHTML = "Please Enter valid Phone Number";
        isValid = false;
    }
    else{
        document.getElementById("errorPhone").innerHTML = "";
    }
    var regExMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.trim() == ""){
        document.getElementById("errorMail").innerHTML = "Please Enter E-mail Address";
        isValid = false;
    }
    else if(!email.match(regExMail)){
        document.getElementById("errorMail").innerHTML = "Please Enter valid E-mail Address";
        isValid = false;
    }
    else{
        document.getElementById("errorMail").innerHTML = "";
    }
    if(make.trim() == ""){
        document.getElementById("errorMake").innerHTML = "Please Enter Company Name";
        isValid = false;
    }
    else{
        document.getElementById("errorMake").innerHTML = "";
    }
    if(model.trim() == ""){
        document.getElementById("errorModel").innerHTML = "Please Enter Model Name";
        isValid = false;
    }
    else{
        document.getElementById("errorModel").innerHTML = "";
    }
    if(year.trim() == ""){
        document.getElementById("errorYear").innerHTML = "Please Enter Year";
        isValid = false;
    }
    else if(!(parseInt(year)>1900 && parseInt(year)<=new Date().getFullYear())){
         document.getElementById("errorYear").innerHTML = "Please Enter valid Year";
        isValid = false;    
    }
    else{
        document.getElementById("errorYear").innerHTML = "";
    }
    
    if(isValid){
        var i = parseInt(localStorage.getItem("items"))+1;
        localStorage.setItem("items",i);
        localStorage.setItem("name[" + i + "]", name);
        localStorage.setItem("address[" + i + "]", address);
        localStorage.setItem("city[" + i + "]", city);
        localStorage.setItem("phoneNumber[" + i + "]", phoneNumber);
        localStorage.setItem("email[" + i + "]", email);
        localStorage.setItem("make[" + i + "]", make);
        localStorage.setItem("model[" + i + "]", model);
        localStorage.setItem("year[" + i + "]", year);
        window.open("http://localhost/web/showData.html?id="+i);
    }
    else{
        return false;
    }
}

function searchModel() {
    document.getElementById("data").innerHTML = "";
    var model = document.getElementById("search").value;
    var checkVar = 0;
    for (checkVar = 0; checkVar < localStorage.length; checkVar++) {
        if (model == localStorage.getItem("model[" + checkVar + "]")) {
            var data = "<div id='Model" + model + "," + checkVar + "'><label>Name :- </label><label> " + localStorage.getItem("name[" + checkVar + "]") + " </label><br />" +
                "<label>Address :- </label><label> " + localStorage.getItem("address[" + checkVar + "]") + " </label><br />" +
                "<label>City :- </label><label> " + localStorage.getItem("city[" + checkVar + "]") + " </label><br />" +
                "<label>phoneNumber :- </label><label> " + localStorage.getItem("phoneNumber[" + checkVar + "]") + " </label><br />" +
                "<label>Email :- </label><label> " + localStorage.getItem("email[" + checkVar + "]") + " </label><br />" +
                "<label>Make :- </label><label> " + localStorage.getItem("make[" + checkVar + "]") + " </label><br />" +
                "<label>Model :- </label><label id='labelModel'> " + localStorage.getItem("model[" + checkVar + "]") + " </label><br />" +
                "<label>Year :- </label><label> " + localStorage.getItem("year[" + checkVar + "]") + " </label><br /><a href='http://www.jdpower.com/cars/" + localStorage.getItem("make[" + checkVar + "]") + "/" + localStorage.getItem("model[" + checkVar + "]") + "/" + localStorage.getItem("year[" + checkVar + "]") + "'>http://www.jdpower.com/cars/" + localStorage.getItem("make[" + checkVar + "]") + "/" + localStorage.getItem("model[" + checkVar + "]") + "/" + localStorage.getItem("year[" + checkVar + "]") + "</a> </div><br/>";
            document.getElementById("data").innerHTML += data;
            console.log(data);
            data = "";
        }
    }
}


function showData() {
    var id = location.href.split('id=')[1];
    console.log(id);
    var da = "<div id='Model" + id + "'><label>Name :- </label><label> " + localStorage.getItem("name[" + id + "]") + " </label><br />" +
        "<label>Address :- </label><label> " + localStorage.getItem("address[" + id + "]") + " </label><br />" +
        "<label>City :- </label><label> " + localStorage.getItem("city[" + id + "]") + " </label><br />" +
        "<label>phoneNumber :- </label><label> " + localStorage.getItem("phoneNumber[" + id + "]") + " </label><br />" +
        "<label>Email :- </label><label> " + localStorage.getItem("email[" + id + "]") + " </label><br />" +
        "<label>Make :- </label><label> " + localStorage.getItem("make[" + id + "]") + " </label><br />" +
        "<label>Model :- </label><label id='labelModel'> " + localStorage.getItem("model[" + id + "]") + " </label><br />" +
        "<label>Year :- </label><label> " + localStorage.getItem("year[" + id + "]") + " </label><br /><a id='JDLink' href='http://www.jdpower.com/cars/" + localStorage.getItem("make[" + id + "]") + "/" + localStorage.getItem("model[" + id + "]") + "/" + localStorage.getItem("year[" + id + "]") + "'>http://www.jdpower.com/cars/" + localStorage.getItem("make[" + id + "]") + "/" + localStorage.getItem("model[" + id + "]") + "/" + localStorage.getItem("year[" + id + "]") + "</a> </div><br/><div id='homelocation'><a href='http://localhost/web/home.html'>Click here to return to Home Page</a></div>";
    document.getElementById("data").innerHTML = da;
}