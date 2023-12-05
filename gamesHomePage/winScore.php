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



function addWon($conn, $Id)
{
    $sql = "UPDATE usersstats SET GamesWon = GamesWon + 1 WHERE id = '$Id'";
    $conn->query($sql);
}

function addGames($conn, $Id)
{
    $sql = "UPDATE usersstats SET GamesPlayed = GamesPlayed + 1 WHERE id = '$Id'";
    $conn->query($sql);
}

$conn = connectDB();

$id = getUserIdFromCookie();



addWon($conn, $id);

addGames($conn, $id);


mysqli_close($conn);
