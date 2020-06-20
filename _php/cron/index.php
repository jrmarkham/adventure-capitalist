<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type");
require '../database.php';
// cron job runs every 5 minutes and updates for aut earns
$query_auto_earn = "UPDATE biz SET total=total+autoEarn WHERE auto=1";
mysqli_query($con, $query_auto_earn);
mysqli_close($con);
