<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type");
require '../database.php';

// BIZ DATA ....
// getting updated data namely earn totals and  changes in auto earn states
function get_biz_totals($con, $query){
    $result = mysqli_query($con, $query);
    $data = array();
    while ($row = mysqli_fetch_array($result)) {
        $data[] = array(
            'id' => $row['id'],
            'total' => $row['total'],
            'auto' => filter_var($row['auto'], FILTER_VALIDATE_BOOLEAN),
            'capacity' => $row['capacity']
        );
    }
    return $data;
}

$query_biz = "SELECT * FROM biz";
$data = get_biz_totals($con, $query_biz);

echo json_encode($data);
