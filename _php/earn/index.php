<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type");

// post earn update vis id //

if (isset($_POST['id']) ) {
    $id = $_POST['id'];
    require '../database.php';
    $query_earn = "UPDATE biz SET total=total+earn WHERE id=$id";
    if (mysqli_query($con, $query_earn)) {
        echo 'success';
    } else {
        echo 'error::: ' . mysqli_error($con);
    }
    mysqli_close($con);
} else {
    echo 'error::: no posted data';
}
