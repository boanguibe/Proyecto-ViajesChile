$(function(){
    $('h3').dblclick(function(){
        $(this).css({
            color:'red',
         })
    })

   $('.card-title').click(function(){
        $('p').hide('slow')
   })

   $('#enviarcorreo').click(function(event){
        
    //event.preventDefault();
    //llamar a funcion que valida
    //console.log(event);
    alert("El Correo fue enviado correctamente")
    //this.submit();

    })
})