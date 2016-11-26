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

	case 'get_item_test': 
	      // Получение информации о товаре в тестовом режиме 
	      $item = $input['item']; 
	      if ($item == 'item1') { 
	        $response['response'] = array( 
	          'item_id' => 125, 
	          'title' => '300 золотых монет (тестовый режим)', 
	          'photo_url' => 'http://somesite/images/coin.jpg', 
	          'price' => 5 
	        ); 
	      } elseif ($item == 'item2') { 
	        $response['response'] = array( 
	          'item_id' => 127, 
	          'title' => '500 золотых монет (тестовый режим)', 
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

	case 'order_status_change': 
	      // Изменение статуса заказа 
	      if ($input['status'] == 'chargeable') { 
	        $order_id = intval($input['order_id']); 

	// Код проверки товара, включая его стоимость 
	        $app_order_id = 1; // Получающийся у вас идентификатор заказа. 

	$response['response'] = array( 
	          'order_id' => $order_id, 
	          'app_order_id' => $app_order_id, 
	        ); 
	      } else { 
	        $response['error'] = array( 
	          'error_code' => 100, 
	          'error_msg' => 'Передано непонятно что вместо chargeable.', 
	          'critical' => true 
	        ); 
	      } 
	      break; 

	case 'order_status_change_test': 
	      // Изменение статуса заказа в тестовом режиме 
	      if ($input['status'] == 'chargeable') { 
	        $order_id = intval($input['order_id']); 

	$app_order_id = 1; // Тут фактического заказа может не быть - тестовый режим. 

	$response['response'] = array( 
	          'order_id' => $order_id, 
	          'app_order_id' => $app_order_id, 
	        ); 
	      } else { 
	        $response['error'] = array( 
	          'error_code' => 100, 
	          'error_msg' => 'Передано непонятно что вместо chargeable.', 
	          'critical' => true 
	        ); 
	      } 
	      break; 
	  } 
	} 

	echo json_encode($response); 
	?> 