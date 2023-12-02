<?php

$name = '';
$password = '';

function connectDB()
{
    $serverName = "localhost";
    $serverUsername = "root";
    $serverPassword = "";
    $dbName = "webjogos";

    $conn = new mysqli($serverName, $serverUsername, $serverPassword, $dbName);


    return $conn;
}

function searchUser($name, $password, $conn)
{
    $sql = "SELECT UserName, UserPassword FROM users";
    $result = $conn->query($sql);

    while ($row = $result->fetch_assoc()) {
        $username = $row["UserName"];
        $userpassword = $row["UserPassword"];
        if ($username === $name && $password === $userpassword) {
            header("Location: gamesHomePage/gamesHomePage.php");
            exit();
        } else {
            echo "<script>alert('Invalid data');</script>";
        }
    }
}

if (isset($_POST['submit'])) {
    $name = $_POST['nameName'];
    $password = $_POST['passwordName'];

    if ($name != null && $password != null) {

        $conn = connectDB();

        searchUser($name, $password, $conn);


        mysqli_close($conn);
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Sign In</title>
</head>

<body>
    <form class="login-section" method="post">
        <div class="login-title">Sign In</div>
        <div class="login-inputs">
            <div class="input-name">
                <input name="nameName" autocomplete="off" required id="name" type="text" autofocus class="input" placeholder="Name" value="<?php echo $name; ?>" />
            </div>

            <div class="input-password">
                <input name="passwordName" autocomplete="off" required id="password" type="password" autofocus class="input" placeholder="Password" value="<?php echo $password; ?>" />
                <img class="icon_eye" src="icons/eye_hide.png" alt="eye-show/hide" />
            </div>
        </div>
        <div class="register-container">
            <p>Don't have an account yet?</p>
            <a href="createAccount.php">Create one!</a>
        </div>

        <div class="btn-container">
            <button type="submit" name="submit">Sign In</button>
        </div>
    </form>
    <script src="index.js"></script>
</body>

</html>