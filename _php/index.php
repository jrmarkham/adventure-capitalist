<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type");
require 'database.php';

// BIZ DATA ....
// use this function for main and first data load //
function get_biz_data($con, $query){
    $result = mysqli_query($con, $query);
    $data = array();
    while ($row = mysqli_fetch_array($result)) {
        $data[] = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'auto' => filter_var($row['auto'], FILTER_VALIDATE_BOOLEAN),
            'total' => $row['total'],
            'earn' => $row['earn'],
            'autoEarn' => $row['autoEarn'],
            'capacity' => $row['capacity']
        );
    }
    return $data;
}
// set basic query for table data of all rows //
$query_biz = "SELECT * FROM biz";
$data = get_biz_data($con, $query_biz);
// set data to json
echo json_encode($data);
