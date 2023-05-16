<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Kullanıcıdan gelen verileri alın
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Kullanıcı adını email formatında ve dolu olduğunu kontrol et
  if (!filter_var($username, FILTER_VALIDATE_EMAIL) || empty($username) || empty($password)) {
    echo 'error';
    exit;
  }

  // Kullanıcı adı ve şifrenin doğru olup olmadığını kontrol et
  if ($username === 'b201210566@sakarya.edu.tr' && $password === 'b201210566') {
    // Başarılı login durumunda hoşgeldin mesajını döndür
    echo 'success';
  } else {
    // Login işlemi başarısız ise hata mesajını döndür
    echo 'error';
  }
} else {
  header("Location: login.html"); // POST metoduyla erişilmediyse login sayfasına yönlendir
  exit;
}
?>
