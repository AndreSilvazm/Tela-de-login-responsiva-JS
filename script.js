function MSG(){

    var senhatxt = document.getElementById('senha').value
    var emailtxt = document.getElementById('email').value

    if(senhatxt.length == 0 || emailtxt.length == 0){

        window.alert('digita algo')
    }
    else{

        window.alert(`Entrou com o email: ${emailtxt} e a Senha ${senhatxt}`)


        var ll = [senhatxt, emailtxt]
        window.alert(ll)
        let ind = ll.indexOf('andre.mani2015@gmail.com')
        let inds = ll.indexOf('deus123')
        if (ind > -1){
            window.alert(`achamos na posição email ${ind}`)

            if (inds > -1){

                window.alert(`achamos sua senha posição ${inds}`)

                window.confirm(`USUARIO DE EMAIL ${emailtxt}, AUTORIZADO E AUTENTICADO!!!`)

            }
            else{

                window.alert('email achado, mas senha nao achada')
            }
        }
        else{

            window.alert('email nao achado')
        }
    }



}