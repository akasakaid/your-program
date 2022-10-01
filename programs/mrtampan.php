<?php

// membuat signature by member twice hehe

$string = "inisebuahdatasignature";
$secret = "Jihyo/Nayeon/Jeongyeon/Momo/Sana/Mina/Dahyun/Chaeyoung/Tzuyu"
$sig = hash_hmac('sha256', $string, $secret);

echo $sig;


?>
