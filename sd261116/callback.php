<?php 
	header("Content-Type: application/json; encoding=utf-8"); 

	if ($item == 'item1') { 
	        $response['response'] = array( 
	          'item_id' => 25, 
	          'title' => '300 золотых монет', 
	          'photo_url' => 'http://somesite/images/coin.jpg', 
	          'price' => 5 
	        ); 
	      } elseif ($item == 'item2') { 
	        $response['response'] = array( 
	          'item_id' => 27, 
	          'title' => '500 золотых монет', 
	          'photo_url' => 'http://somesite/images/coin.jpg', 
	          'price' => 10 
	        ); 
	      } else { 
	        $response['error'] = array( 
	          'error_code' => 20, 
	          'error_msg' => 'Товара не существует.', 
	          'critical' => true 
	        ); 
	      } 
	      break; 
	?> 
