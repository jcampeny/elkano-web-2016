<?php
/**
 * Script to submit the contents of the contact form via an XHR. Contents of the form are sent to this script by the
 * site javascript. This just processes the data and sends it to the specified email address.
 *
 * Created by PhpStorm.
 * User: Michael
 * Date: 17/11/13
 * Time: 11:49
 */

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
//----------
switch ($request->type) {
    case 'press':
    	$fromEmail = $request->email;
        $message = "
			Nombre: ".$request->name."
			Email: ".$request->email."
			Mensaje:".$request->message;
        break;
    case 'career':
        $fromEmail = $request->email;
        $message = "
			Nombre: ".$request->name." ".$request->last."
			Email:".$request->email."
			Phone: ".$request->phone."
			Company: ".$request->company."
			Portofolio: ".$request->portofolio."
			Linkedin: ".$request->linkedin."
			Website: ".$request->website."
			How did you hear about this job?: ".$request->hear;
        break;
    case 'client':
        $fromEmail = $request->email;
        $message = "
			Nombre: ".$request->name."
			Email:".$request->email."
			Phone: ".$request->phone."
			Company: ".$request->company."
			How did you hear about us?: ".$request->hear."
			What is your project about?: ".$request->about."
			What's your budget?: ".$request->budget."
			When do you want your project to start?: ".$request->start."
			When do you want your project to launch?: ".$request->launch;
        break;
}
//--------


$subject = "Mensaje procedente de web Elkanodata.com";
$headers = "From: $fromEmail\r\n";
$mail = "jordicampeny12@gmail.com";

if(mail($mail, $subject, $message, $headers)) {
	//insertToDB($request);
	echo 1;

}
else {
	echo 0;
}

/*for test*/
/*
class Test {
	public $name="Jordi Campeny";
	public $email="jcampeny@elkanodata.com";
	public $company="elkanodata";
	public $interest="testeando esto";
	public $textarea="esto es el contenido del mensaje";
}

$test = new Test;
insertToDB($test);
*/
/**/
function insertToDB($request) {
	//DB connection
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "wpangular";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	// Get actual date
	/*  for gmt date:
	*	$d =  gmdate("Y-m-d H:i:s"); 
	*/
	$d =  date("Y-m-d H:i:s"); 
	$date = date($d);

	// setting parameters from request
	$name=$request->name;
	$email=$request->email;
	$company=$request->company;
	$interest=$request->interest;
	$textarea=$request->textarea;

	//creating the first query - wp_post
	$sql = "INSERT INTO wp_posts (post_author, post_date, post_date_gmt, post_content, post_title, post_status, post_name, post_modified, post_modified_gmt, post_type)
			VALUES (1, '$date', '$date', '','From: ".$name."', 'private', '".$name."', '$date', '$date', 'message');";

	//creating the second query - wp_postmeta
	if ($conn->query($sql) === TRUE) {
		$id = $conn->insert_id;
		$sql = "INSERT INTO wp_postmeta (post_id, meta_key, meta_value)
				VALUES  ($id, 'name_message', '".$name."'),
						($id, 'email_message', '".$email."'),
						($id, 'company_message', '".$company."'),
						($id, 'interest_message', '".$interest."'),
						($id, 'content_message', '".$textarea."');";
		$conn->query($sql);
	}

	//close connection
	$conn->close();	
}

?>