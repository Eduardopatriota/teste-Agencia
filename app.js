

var nome = 1;
function sumirFoto(el) {
    
    if(el = true && nome == 1){
    document.getElementById('sumir').id = 'aparecer' 
    nome++;
    console.log(nome); }
    else  {
    document.getElementById('aparecer').id = 'sumir' ; 
    nome--
    }
}

    let mensagemHora = document.getElementById('msg')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let dia = data.getDate() 
    let mensagem    
    

    if (hora >= 5 && hora < 12){
        mensagem = 'Bom dia' 
              
    }

    else if (hora >= 10 && hora < 18){        
        mensagem = 'Boa tarde'                
    }

    else{       
        mensagem = 'Boa noite'
    }

    mensagemHora.innerHTML = `Hoje é dia ${dia}<br> São ${hora}:${min} <br> ${mensagem}`

    

  
     
    
    
    
    
    




         
    
    
    


