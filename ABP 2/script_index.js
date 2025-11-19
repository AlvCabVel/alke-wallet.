// INICIALIZACIÓN: Ejecuta el código cuando el DOM está completamente cargado
$(function(){
   
    
    // CREDENCIALES: Datos de usuario válido almacenados localmente
    const emailCorrecto = "1234";
    const passwordCorrecto = "1234";
    
    // ============================================
    // FUNCIÓN: AUTENTICACIÓN DE USUARIO
    // ============================================
    // Valida las credenciales ingresadas contra las credenciales correctas
    // Redirige si son válidas o muestra error si son inválidas
    
    $("#loginForm").on("submit", function(e){
        
        // PREVENCIÓN: Evita el envío por defecto del formulario
        e.preventDefault();
     
        // CAPTURA: Obtiene los valores ingresados por el usuario en los inputs
        let emailIngresado = $("#email").val();
        let passwordIngresado = $("#password").val();

        // REFERENCIAS: Almacena las alertas para manipularlas posteriormente
        const alertaAprobada = $("#alertaAprobada")
        const alertaDenegada = $("#alertaDenegada")

        // VALIDACIÓN: Compara credenciales ingresadas con las credenciales correctas
        // VALIDACIÓN: Compara credenciales ingresadas con las credenciales correctas
        if(emailIngresado == emailCorrecto && passwordIngresado == passwordCorrecto){
             
            // 1. Oculta la alerta de error (por si estaba visible)
            alertaDenegada.addClass('d-none');
            
            // 2. Muestra alerta de éxito quitando 'd-none' (¡con comillas!)
            alertaAprobada.removeClass('d-none'); 
            
            // 3. Ya no se usa alertaAprobada.show()
            
            setTimeout(function(){
              // ACCESO APROBADO: Redirige al usuario al menú principal
              window.location.href="./menu.html";
            },1000);
            
        }else{
            
            // 1. Oculta la alerta de éxito (por si estaba visible)
            alertaAprobada.addClass('d-none');

            // 2. Muestra alerta de error quitando 'd-none' (¡con comillas!)
            alertaDenegada.removeClass('d-none');
            
            // 3. Ya no se usa alertaDenegada.show()
       }
    });
});


