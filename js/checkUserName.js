var errorMsg = document.getElementById('feedbac');
var checkUserLength = document.getElementById('username');
function checkUsername(minlength){
    if(checkUserLength.value.length < minlength){
        errorMsg.innerHTML ='количество символов должно быть не менее ' + minlength; 
    }else{
        errorMsg.innerHTML ='';
    }
}
errorMsg.addEventListener('blur',function(){
    checkUsername(2);
},false);
