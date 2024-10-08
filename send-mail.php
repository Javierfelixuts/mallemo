<?php
header('Content-Type: application/json'); // Asegúrate de que la respuesta sea JSON

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = json_decode(file_get_contents('php://input'), true); // Leer datos JSON
    $name = strip_tags(trim($input["name"]));
    $email = filter_var(trim($input["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($input["message"]);

    // Validar que todos los campos están completos
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Por favor, completa todos los campos correctamente.']);
        exit;
    }

    // Configurar los detalles del correo
    $recipient = "javierantoniofelixtorres@gmail.com";  // Cambia a tu correo
    $subject = "Nuevo mensaje de $name";

    // Contenido del correo
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$message\n";

    // Encabezados del correo
    $email_headers = "From: $name <$email>";

    // Enviar el correo
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200); // Establecer el código de respuesta HTTP
        echo json_encode([
            'status' => 'success',
            'message' => 'Gracias, tu mensaje ha sido enviado.',
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Lo siento, ocurrió un error al enviar tu mensaje.']);
    }
} else {
    http_response_code(403);
    echo json_encode(['status' => 'error', 'message' => 'Método de solicitud no permitido.']);
}
?>
