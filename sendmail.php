<?php
// CORS Headers (Inhe rehne den taake React connect kar sakay)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Sirf POST request allow hogi
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    exit();
}

// React se aane wala JSON data read karein
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "No data received."]);
    exit();
}

/** * YAHAN CHANGE KIYA HAI:
 * React mein 'FullName' hai, isliye yahan bhi 'FullName' likhna hoga.
 */
$name    = trim($data['FullName'] ?? ''); 
$email   = trim($data['email'] ?? '');
$phone   = trim($data['phone'] ?? '');
$message = trim($data['message'] ?? '');

// 1. Validation: Agar fields khali hain
if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error", 
        "message" => "Please fill all required fields (Name, Email, Phone, and Message)."
    ]);
    exit();
}

// 2. Email Validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email address format."]);
    exit();
}

// Data Clean Karein
$name = htmlspecialchars($name);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);

/**
 * CONFIGURATION: Inhe aap change kar sakte hain
 */
$to      = "business@aussiewebsiteagency.com"; // <--- Apna Receiver Email yahan rakhen
$subject = "New Inquiry: $name";
$from    = "business@aussiewebsiteagency.com"; // <--- Yeh aapki domain ki email honi chahiye

$mail_body = "You have a new inquiry:\n\n";
$mail_body .= "Full Name: $name\n";
$mail_body .= "Email: $email\n";
$mail_body .= "Phone: $phone\n\n";
$mail_body .= "Message:\n$message\n";

$headers = "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Email Send Process
if (mail($to, $subject, $mail_body, $headers)) {
    echo json_encode([
        "status" => "success",
        "message" => "Your message has been sent successfully!"
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "status" => "error", 
        "message" => "Server Error: Could not send email. Check PHP mail configuration."
    ]);
}
?>