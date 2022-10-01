<?php

if (isset($_POST['submit'])) {
    $ext = pathinfo($_FILES['fileupload']['name'], PATHINFO_EXTENSION);
    $randAngka = rand(0, 10000000000000);
    $namaFile = "$randAngka.".$ext;
    $namaSementara = $_FILES['fileupload']['tmp_name'];

    // tentukan lokasi file akan dipindahkan
    $dirUpload = "upload/";

    // pindahkan file
    $terupload = move_uploaded_file($namaSementara, $dirUpload.$namaFile);

    if ($terupload) {
        echo "Sukses mengupload file.";
        
    } else {
        echo "Gagal mengupload file.";
    }
}

?>
