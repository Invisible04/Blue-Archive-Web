<?php

$log = $_POST['log'];
$path = $_POST['path'];

$file = fopen($path, "w") or die("Unable to open file!");
fwrite($file, $log);

echo "Data saved to file!";

?>