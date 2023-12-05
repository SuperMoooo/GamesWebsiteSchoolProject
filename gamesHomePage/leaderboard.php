<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="leaderboard.css" />
    <title>LeaderBoard</title>
</head>

<body>
    <nav>
        <a class="goBackLink" href="gamesHomePage.php">⬅ Go back</a>
        <h1>LeaderBoard</h1>
    </nav>

    <section>
        <div class="sectionTitles">
            <p>Username:</p>
            <div class="stats">
                <p>GamesPlayed:</p>
                <p>GamesWon:</p>
                <p>GamesLost:</p>
            </div>
        </div>
        <?php

        function connectDB()
        {
            $serverName = "localhost";
            $serverUsername = "root";
            $serverPassword = "";
            $dbName = "webjogos";

            $conn = new mysqli($serverName, $serverUsername, $serverPassword, $dbName);


            return $conn;
        }

        $conn = connectDB();


        $sql = "SELECT DISTINCT u.UserName, s.GamesPlayed, s.GamesWon, s.GamesLost 
        FROM users u
        JOIN usersstats s ON u.id = s.id ORDER BY s.GamesWon DESC";
        $result = $conn->query($sql);


        while ($row = $result->fetch_assoc()) {
            echo '<div class="databaseInfo">';
            echo '<p>' . $row['UserName'] . '</p>';
            echo '<div class="statsDatabase">';
            echo '<p>' . $row['GamesPlayed'] . '</p>';
            echo '<p>' . $row['GamesWon'] . '</p>';
            echo '<p>' . $row['GamesLost'] . '</p>';
            echo '</div>';
            echo '</div>';
        }


        $conn->close();
        ?>
    </section>
</body>

</html>