//NO JQUERY FOR YOU!

var page1 = document.getElementById("password");
if(typeof(page1)!=undefined && page1 != null){
    var password = document.getElementById("password"),
      confirm_password = document.getElementById("confirm_password");

    function validatePassword() {
      if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
        confirm_password.setCustomValidity('');
      }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
}
var page3 = document.getElementById("address1");
if(typeof(page3)!=undefined && page3 != null){
    //Set up messy variables.
    var nothanks = document.getElementById("nothanks"),
        digital = document.getElementById("digital"),
        print = document.getElementById("print");
        address1 = document.getElementById("address1"),
        city = document.getElementById("city"),
        state = document.getElementById("state"),
        zipcode = document.getElementById("zipcode"),
        labels = document.getElementsByTagName("label");

    function checkSelect(){
            address1.required=false;
            city.required=false;
            state.required=false;
            zipcode.required=false;
            for(i=0;i<labels.length;i++){
                labels[i].classList.add("hidden");
            }
    }
    function resetForm(){
            address1.required=true;
            city.required=true;
            state.required=true;
            zipcode.required=true;
            for(i=0;i<labels.length;i++){
                labels[i].classList.remove("hidden");
            }
    }

    nothanks.onchange = checkSelect;
    print.onchange = resetForm;
    digital.onchange = resetForm;
}
