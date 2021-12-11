
// Função para efeito da navbar
addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("stick", window.scrollY > 0);
});

// /função botão menu
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    
    const navBar = document.querySelector('.navBar');
    
    menuToggle.classList.toggle('active');
    navBar.classList.toggle('active');
}

// Função Para aparecer as letras com efeito de 'sendo digitadas'.
function texto(){
    var div = document.getElementById('log');
    var texto = 'Sempre ao seu agrado e conforto!';

    function escrever(str, el) {
        var char = str.split('').reverse();
        var typer = setInterval(function() {
            if (!char.length) return clearInterval(typer);
            var next = char.pop();
            el.innerHTML += next;
        }, 100);
    }
    escrever(texto, div);
}


// Validar E-mail
function validar(){

    var form =  document.getElementById("form");
    var email =  document.getElementById("email").value;
    var text =  document.getElementById("text");

    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;    /*conjuto de caractere que inclui o @@@*/

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Endereço de e-mail válido!";
        text.style.color = "#00ff00";
    } else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Por favor, insira um endereço de e-mail válido!";
        text.style.color = "#ff0000";
    }

    /* Se deixar a caixa vazia mostra a frase*/
    if(email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}

// Função para dar zoom na foto
function zoom(){
    var zoom = document.querySelector('img#zoom');

    zoom.addEventListener('mouseover', entrar);
    zoom.addEventListener('mouseout', sair);

    function entrar(){
        zoom.style.transform = "scale(1.1)"; 
        zoom.style.borderRadius = "8px";
        zoom.style.transition = "all 0.3s";
        zoom.style["boxShadow"] = "0 5px 15px #999999";
    }
    function sair(){
        zoom.style.transform = "scale(1)";
        zoom.style.borderRadius = "0px";
        zoom.style.transition = "all 0.3s";
        zoom.style["boxShadow"] = "none";
    }
}

// Função para fazer elemento subir ao passar o mouse.
function subirElemento(){
    
    var subir = document.querySelector('div#subir');
    subir.addEventListener('mouseover', entrar);
    subir.addEventListener('mouseout', sair);

    function entrar(){
        subir.style.transform = "translateY(-40px)";
        subir.style.transition = "all 0.3s";
    };
    function sair(){
        subir.style.transform = "translateY(0px)";
        subir.style.transition = "all 0.3s";
    };
}
function subirElemento2(){
    
    var subir = document.querySelector('div#subir2');
    subir.addEventListener('mouseover', entrar);
    subir.addEventListener('mouseout', sair);

    function entrar(){
        subir.style.transform = "translateY(-40px)";
        subir.style.transition = "all 0.3s";
    };
    function sair(){
        subir.style.transform = "translateY(0px)";
        subir.style.transition = "all 0.3s";
    };
}
function subirElemento3(){
    
    var subir = document.querySelector('div#subir3');
    subir.addEventListener('mouseover', entrar);
    subir.addEventListener('mouseout', sair);

    function entrar(){
        subir.style.transform = "translateY(-40px)";
        subir.style.transition = "all 0.3s";
    };
    function sair(){
        subir.style.transform = "translateY(0px)";
        subir.style.transition = "all 0.3s";
    };
}
function subirElemento4(){
    
    var subir = document.querySelector('div#subir4');
    subir.addEventListener('mouseover', entrar);
    subir.addEventListener('mouseout', sair);

    function entrar(){
        subir.style.transform = "translateY(-40px)";
        subir.style.transition = "all 0.3s";
    };
    function sair(){
        subir.style.transform = "translateY(0px)";
        subir.style.transition = "all 0.3s";
    };
}
function subirElemento5(){
    
    var subir = document.querySelector('div#subir5');
    subir.addEventListener('mouseover', entrar);
    subir.addEventListener('mouseout', sair);

    function entrar(){
        subir.style.transform = "translateY(-40px)";
        subir.style.transition = "all 0.3s";
    };
    function sair(){
        subir.style.transform = "translateY(0px)";
        subir.style.transition = "all 0.3s";
    };
}
function subirElemento6(){
    
    var subir = document.querySelector('div#subir6');
    subir.addEventListener('mouseover', entrar);
    subir.addEventListener('mouseout', sair);

    function entrar(){
        subir.style.transform = "translateY(-40px)";
        subir.style.transition = "all 0.3s";
    };
    function sair(){
        subir.style.transform = "translateY(0px)";
        subir.style.transition = "all 0.3s";
    };
}