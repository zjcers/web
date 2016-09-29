<?php
function do_error() {
	header('Status: 500 Internal Server Error');
	echo "Incorrect input data<br/>\n";
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$post_data = file_get_contents('php://input');
	$json_data = json_decode($post_data);
	if (property_exists($json_data, "sender")) {
		if ($json_data->sender->login == "zjcers") {
			shell_exec("cd /home/zane/web && git pull");
			echo("Success\n");
			error_log("Success\n");
		}
		else {
			do_error();
		}
	}
	else {
		do_error();
	}
}
else {
	do_error();
}
?>
