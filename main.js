
function validation(){

    const psw = document.getElementById('psw')
    const pswrepeat = document.getElementById('psw-repeat')
    
        
        if (psw.value != pswrepeat.value) {
            alert('Mot de passe non similaire')
            return false;
        }
      
}
    







    