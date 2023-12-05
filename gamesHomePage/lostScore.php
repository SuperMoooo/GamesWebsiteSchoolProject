<?php

require '../index.php';

function getUserIdFromCookie()
{
    // Check if the "userId" cookie is set
    if (isset($_COOKIE['userId'])) {
        return $_COOKIE['userId'];
    } else {
        return null;
    }
}

function addLost($conn, $Id)
{
    $sql = "UPDATE usersstats SET GamesLost = GamesLost + 1 WHERE id = '$Id'";
    $result = $conn->query($sql);
}

function addGames($conn, $Id)
{
    $sql = "UPDATE usersstats SET GamesPlayed = GamesPlayed + 1 WHERE id = '$Id'";
    $result = $conn->query($sql);
}

$conn = connectDB();

$id = getUserIdFromCookie();



addLost($conn, $id);

addGames($conn, $id);


mysqli_close($conn);
