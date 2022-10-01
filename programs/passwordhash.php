<html>
  <head>
    <title>Welcome To Password Hash Generator</title>
    <style>
      #wow {
        margin-top: 5%;
      }
      button {
        margin-top: 10px;
      }
    </style>
  </head>
  <body>
    <center id="wow">
      <?php 
      if(isset($_POST['generate']) {
        $pw = $_POST['pw'];
        echo password_hash($pw, PASSWORD_DEFAULT);
      } else {?>
        <form action="" method="post" autocomplete="off">
          <input type="text" name="pw" required placeholder="Masukkan kata sandi...">
          <button type="submit" name="generate">Generate Password</button>
        </form>
      <?php }?>
    </center>
  </body>
</html
