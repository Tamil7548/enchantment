function ValidationForm(){
    var name=document.f1.name.value;
    var phno=document.f1.phnumber.value;
    var table=document.f1.tabnum.value;

    if(name==null || name==""){
        alert("Name can't be blank");
        return false
    }
    else if(phno==null || phno=="" || isNaN(phno)){
        alert("Enter a phone Number")
        return false
    }
    else if(table==null || table=="" || isNaN(table)){
        alert(" Enter your Table Number")
        return false
    }
    else{
        alert("Your Reservation is completed...Thank You " + name);
        return true;
    }
    
}