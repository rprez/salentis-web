<?
echo 'ok';
date_default_timezone_set ('America/Argentina/Buenos_Aires');
        $data = array(
            'secret' => "6LdvZdEUAAAAAEYtulY3BP0WaYPxNgyyTx36H8tn",
            'response' => $_POST['g-recaptcha-response']
        );

        $verify = curl_init();
        curl_setopt($verify, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
        curl_setopt($verify, CURLOPT_POST, true);
        curl_setopt($verify, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($verify, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($verify, CURLOPT_RETURNTRANSFER, true);
        $response = json_decode(curl_exec($verify),true);
        curl_close($verify);
        var_dump($response);

        if(!$response['success'])
            die('Error');
 
   require 'PHPMailerAutoload.php';

	$email_to = 'consultas@23web.com.ar';
    //$email_to = 'werbapropiedades@gmail.com';
    if($_POST['turnos']){$email_subject = "Mensaje desde 23webTurnos";}else{$email_subject = "Mensaje desde 23web";}
    $email_from = 'info@23web.com.ar';

    $email_message = "Detalles del formulario desde 23web:<br /><br />";
    $email_message .= "Nombre: " . $_POST['nombre'] . "<br />";
    $email_message .= "E-mail: " . $_POST['email'] . "<br />";
    $email_message .= "Telefono: " . $_POST['telefono'] . "<br />";
    $email_message .= "Empresa: " . $_POST['empresa'] . "<br />";
    $email_message .= "Mensaje: " . $_POST['text'] . "<br />";
            
            if($_POST['nombre'] != 'Eric Jones'){
        if($_POST['email'] != 'ericjonesmyemail@gmail.com'){
            if($_POST['email'] != 'PollyMatheson756@aol.com'){
    $mail = new PHPMailer;
    $mail->setFrom($email_from, $nombre_inm);
    $mail->addAddress($email_to,$nombre_inm);
    $mail->Subject = $email_subject;
    $mail->msgHTML($email_message);
    $mail->AltBody = $email_message;

    if (strpos($_POST['text'], 'т') !== false) {die('uno');
    }else{

        
        if (strpos($_POST['text'], '¾') !== false) {die('dos');}else{
          if (strpos($_POST['text'], 'Hallo') !== false) {die('dos');}else{
            if (strpos($_POST['text'], 'ε') !== false) {die('3');}else{
if (strpos($_POST['text'], 'saya') !== false) {die('4');}else{
    if (strpos($_POST['text'], 'Sveiki') !== false) {die('5');}else{
            if (strpos($_POST['text'], 'Ã') !== false) {die('6');}else{
  if (strpos($_POST['text'], 'Szia') !== false) {die('7');}else{
  if (strpos($_POST['text'], 'à') !== false) {die('8');}else{
    if (strpos($_POST['text'], 'pretium') !== false) {die('9');}else{
        if (strpos($_POST['text'], 'Å') !== false) {die('10');}else{

    if($_POST['email']){
        if($_POST['email'] != 'cassie.lerner2001@yahoo.com'){
           if (strpos($_POST['email'], 'registry.godaddy') !== false) {}else {
                if (strpos($_POST['email'], 'ARTUREXPRESS.COM') !== false) {}else {


    if (!$mail->send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
    
    ?>
    <script language="javascript">
            window.location="http://www.23web.com.ar/gracias.html";
    </script>
    <?}
}
}
}
}
}
}
}
}
}
    }
}
}
}
}
}
}
}
}

?>