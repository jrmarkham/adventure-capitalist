<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type");



if (isset($_POST['id'])) {
    $id = $_POST['id'];
    require '../database.php';

    $query_auto = "UPDATE biz SET auto=1 WHERE id=$id";
    if (mysqli_query($con, $query_auto)) {
        echo 'success';
    } else {
        echo 'error::: ' . mysqli_error($con);
    }

    mysqli_close($con);

} else {
    echo 'error::: no posted data';
}
