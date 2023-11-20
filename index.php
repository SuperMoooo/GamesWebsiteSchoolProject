<?php

if(isset($_POST['submit'])){

    $email = $_POST['emailName'];
    $name = $_POST['nameName'];
    $password = $_POST['passwordName'];
    $confirmPassword = $_POST['verify-passwordName'];

    
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
        <form class="login-section" method="post" action="login_create.php">
            <div class="login-title">Sign In</div>
            <div class="login-inputs">
                <div class="input-name">
                    <input
                        name="nameName"
                        autocomplete="off"
                        required
                        id="name"
                        type="text"
                        autofocus
                        class="input"
                        placeholder="Name"
                    />
                </div>

                <div class="input-password">
                    <input
                        name="passwordName"
                        autocomplete="off"
                        required
                        id="password"
                        type="password"
                        autofocus
                        class="input"
                        placeholder="Password"
                    />
                    <img
                        class="icon_eye"
                        src="icons/eye_hide.png"
                        alt="eye-show/hide"
                    />
                </div>
            </div>
            <div class="register-container">
                <p>Don't have an account yet?</p>
                <a href="createAccount.php">Create one!</a>
            </div>

            <div class="btn-container">
                <button type="submit">Sign In</button>
            </div>
        </form>
        <script src="index.js"></script>
    </body>
</html>
