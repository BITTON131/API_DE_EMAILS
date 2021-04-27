





    //UUID => Universally Unique Identifier

//    function enviarEmail (paraquem, id, assunto, texto) {
        //Biblioteca de envio de enviarEmanil

//    console.log(paraquem, id, assunto, texto);

  //  }


    //class EnviarEmailParaUsuario {

   //     send() {
      //      enviarEmail("brunoivis13@gmail.com", 0001, "Olá!", "Tudo bem?" );
     //   }
   // }

interface DadosDeEnvioEmail{
    paraquem: string;
    id: string;
     assunto: string;
     texto: string;
}

function enviarEmail({paraquem, id, assunto, texto}: DadosDeEnvioEmail) {
     console.log(paraquem, id, assunto, texto);
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail({
            para: "brunoivis13@gmail.com", 
            id: 0001, 
            assunto: "Olá!", 
            texto: "Tudo bem?"})
    }
}