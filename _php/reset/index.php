<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type");

require '../database.php';

$query_reset = "UPDATE biz SET total=0, auto=0";
if (mysqli_query($con, $query_reset)) {
    echo 'success';
} else {
    echo 'error::: ' . mysqli_error($con);
}

mysqli_close($con);
