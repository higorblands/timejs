function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
  

    var minuto = data.getMinutes();
    if (hora >= 0 && hora < 12){
        // BOM DIA
        img.src = 'img/morning.jpg'
        document.body.style.background = '#00b7ff'
        msg.innerHTML = `Agora são ${hora}:${minuto} horas bom dia.`
    } else if ( hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'img/aftermoon.jpg'
        document.body.style.background = '#f39213'
        msg.innerHTML = `Agora são ${hora}:${minuto} horas boa tarde.`
    } else{
        //BOA NOITE 
        img.src = 'img/night.jpg'
        document.body.style.background = '#312727'
        msg.innerHTML = `Agora são ${hora}:${minuto} horas boa noite.`
    }
    }
