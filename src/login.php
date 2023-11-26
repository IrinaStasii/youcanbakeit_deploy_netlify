<?php

echo '<h1>Conexiunea la baza de date</h1>';

try {
    $conn = new mysqli('localhost', 'myUser', '123', 'react');
} catch (Exception $e) {
    if ($e->getMessage()) {
        die('Eroare: ' . $e->getMessage());
    }
}

$userName = $_POST['userName'];
$userPass = $_POST['userPass'];

$q = "SELECT * FROM `users_test` WHERE `userName` = '$userName' ";
$result = $conn->query($q);
$usersArray = $result->fetch_assoc();

if(password_verify($userPass, $usersArray['hashedPass'])){
    echo '<h2 style="color:green">You are logged in!</h2>';
    session_start();
    $_SESSION["loggedin"] = true;
    $_SESSION["userName"] = $userName;
    header('Refresh:3, url=indexAuth.php');
}
else {
    echo '<h2 style="color:red">NU AI ACCES!</h2>';
    header('Refresh:3, url=index.html');
}
