<?php

$email = '';
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

function createUser($email, $name, $password, $conn)
{
    $sameName = verifySameNameInDb($name, $conn);

    if ($sameName === 0) {

        $sql = "INSERT INTO users (UserEmail, UserName, UserPassword) VALUES ('$email', '$name', '$password')";

        if ($conn->query($sql) === TRUE) {
            echo "<script>alert('Sucess!, you account was created');</script>";

            header("Location: index.php");
            exit();
        } else {
            echo "<script>alert('Error!');</script>";
        }

        $sql = "INSERT INTO usersstats (GamesPlayed, GamesWon, GamesLost) VALUES (0, 0, 0)";

        if ($conn->query($sql) === TRUE) {
            echo "";
        }
    } else {
        echo "<script>alert('Name already in use!');</script>";
    }
}


function verifySameNameInDb($name, $conn)
{
    $sql = "SELECT UserName FROM users";
    $result = $conn->query($sql);

    while ($row = $result->fetch_assoc()) {
        $columnName = $row["UserName"];
        if ($columnName === $name) {
            return 1;
        }
    }
    return 0;
}

if (isset($_POST['submit'])) {

    $email = $_POST['emailName'];
    $name = $_POST['nameName'];
    $password = $_POST['passwordName'];
    $confirmPassword = $_POST['verify-passwordName'];

    if ($email != null && $name != null && $password != null && $confirmPassword != null) {

        if ($password === $confirmPassword) {
            $conn = connectDB();

            createUser($email, $name, $password, $conn);


            mysqli_close($conn);
        } else {
            echo "<script>alert('The password camp and the confirm password camp need to have the same value!');</script>";
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Create Account</title>
</head>

<body>
    <form class="login-section" method="post">
        <div class="login-title">Create account</div>
        <div class="login-inputs">
            <div class="input-email">
                <input name="emailName" autocomplete="off" required id="email" type="email" autofocus class="input" placeholder="Email" value="<?php echo $email; ?>" />
                <img class="icon_user" src="icons/user.png" alt="user-icon" />
            </div>

            <div class="input-name">
                <input name="nameName" autocomplete="off" required id="name" type="text" autofocus class="input" placeholder="Name" value="<?php echo $name; ?>" />
            </div>

            <div class="input-password">
                <input name="passwordName" autocomplete="off" required id="password" type="password" autofocus class="input" placeholder="Password" value="<?php echo $password; ?>" />
                <img class="icon_eye" src="icons/eye_hide.png" alt="eye-show/hide" />
            </div>

            <div class="input-verify-password">
                <input name="verify-passwordName" autocomplete="off" required id="verify-password" type="password" class="input" placeholder="Verify Password" />
                <img class="icon_eye2" src="icons/eye_hide.png" alt="eye-show/hide" />
            </div>
        </div>
        <div class="register-container">
            <p>Already have an account?</p>
            <a href="index.php">Sign In!</a>
        </div>

        <div class="btn-container">
            <button name="submit" type="submit">Create Account</button>
        </div>
    </form>
    <script src="index.js"></script>
</body>

</html>