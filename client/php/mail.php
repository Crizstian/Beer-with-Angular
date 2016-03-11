<?php
    header('Content-Type: application/json');
    function cors() {
      // Allow from any origin
      if (isset($_SERVER['HTTP_ORIGIN'])) {
          header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
          header('Access-Control-Allow-Credentials: true');
          header('Access-Control-Max-Age: 86400');    // cache for 1 day
      }

      // Access-Control headers are received during OPTIONS requests
      if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

          if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
              header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

          if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
              header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

          exit(0);
      }

      $mail  = "contacto@cerarmich.org";
    	$thank = "http://cerarmich.org";

      $postdata = file_get_contents("php://input");
      $request  = json_decode($postdata);
      if(!isset($request->nombre))
        header("Location: http://cerarmich.org");
      @$nombre  = $request->nombre;
      @$email   = $request->email;
      @$asunto  = $request->asunto;
      @$mensaje = $request->mensaje;

  		$message = " Contacto Cerarmich. \r\n Nombre del Usuario: ".$nombre." \r\n Correo del Usuario: ".$email." \r\n Mensaje: ".$mensaje." \r\n Contacto Realizado en: ".$thank." \r\n ";

  		$message2= "Cerarmich agradecemos tu preferencia, usuario: '".$nombre."' \r\n Gracias por visitarnos en: '".$thank."' \r\n ";

    	// if(mail($mail, "Mensaje enviado desde Cerarmich.org", $message)){
      //   $data2 = array( 'mensaje' => $message2, 'status' => -1 );
      //   echo json_encode( $data2 );
      // }
      $data2 = array( 'mensaje' => $message2, 'status' => "Mensaje Enviado" );
      echo json_encode( $data2 );
  }
  cors();
?>
