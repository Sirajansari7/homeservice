<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once "db.php"; // Include database connection file

// Get the JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data["name"], $data["contact"], $data["address"], $data["serviceType"], $data["amount"])) {
    echo json_encode(["error" => "Invalid input."]);
    exit;
}

$name = htmlspecialchars(strip_tags($data["name"]));
$contact = htmlspecialchars(strip_tags($data["contact"]));
$address = htmlspecialchars(strip_tags($data["address"]));
$serviceType = htmlspecialchars(strip_tags($data["serviceType"]));
$amount = floatval($data["amount"]);
$area = isset($data["area"]) ? intval($data["area"]) : null;
$problem = isset($data["problem"]) ? htmlspecialchars(strip_tags($data["problem"])) : null;

try {
    // Prepare SQL statement
    $stmt = $pdo->prepare("INSERT INTO bookings (cname, contact, caddress, serviceType, area, problem, amount) 
                           VALUES (:name, :contact, :address, :serviceType, :area, :problem, :amount)");

    // Bind parameters
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":contact", $contact);
    $stmt->bindParam(":address", $address);
    $stmt->bindParam(":serviceType", $serviceType);
    $stmt->bindParam(":area", $area, PDO::PARAM_INT);
    $stmt->bindParam(":problem", $problem);
    $stmt->bindParam(":amount", $amount, PDO::PARAM_STR);

    // Execute the query
    if ($stmt->execute()) {
        echo json_encode(["message" => "Booking successful!"]);
    } else {
        echo json_encode(["error" => "Failed to book service."]);
    }
} catch (PDOException $e) {
    echo json_encode(["error" => "Database error: " . $e->getMessage()]);
}
?>
