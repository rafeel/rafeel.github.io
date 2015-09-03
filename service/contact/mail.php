<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message']) ){
	$message = "This is Mail from Your Personal Website: <br>From:&emsp;".$_POST['name']."&emsp;&lt;".$_POST['email']."&gt; <br>Phone:&emsp;".$_POST['phone']."<br>Message:&emsp;".$_POST['message'];
	if(mail( farelveilsider@gmail.com, "Personal Website Contact", $message)){
		echo "success";
	}
}else{

}


?>