<?php
require_once 'db.php'; // Include database connection file

// Set headers for CORS and JSON response
header('Access-Control-Allow-Origin: http://localhost:3000'); // Adjust the domain to match your frontend
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the input data from the frontend
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate and sanitize input data
    $username = htmlspecialchars(trim($data['username'] ?? ''));
    $email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(trim($data['phone'] ?? ''));
    $password = $data['password'] ?? '';

    // Check if all fields are filled
    if (empty($username) || empty($email) || empty($password)) {
        http_response_code(400);
        echo json_encode(['error' => 'Username, email, and password are required.']);
        exit;
    }

    // Check if the email is valid
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid email format.']);
        exit;
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Prepare the SQL statement to insert the user
    $stmt = $pdo->prepare("INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)");

    try {
        // Execute the statement with the provided data
        $stmt->execute([$username, $email, $phone, $hashedPassword]);
        http_response_code(201);
        echo json_encode(['message' => 'User registered successfully.']);
    } catch (PDOException $e) {
        // Handle errors, such as duplicate email entries
        if ($e->getCode() == 23000) {
            http_response_code(400);
            echo json_encode(['error' => 'Username or email already exists.']);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'An error occurred while registering the user.']);
        }
    }
} else {
    // Handle non-POST requests
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request method.']);
}
