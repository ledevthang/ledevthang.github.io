var a = 0;
    b();
    function b() {
      var i;
      var x = document.getElementsByClassName("img-banners");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      a++;
      if (a > x.length) { a = 1 }
        x[a - 1].style.display = "block";
      setTimeout(b, 3000);
    }
// Sweet Alert
document.getElementById('alert').onclick = function(){
        swal("Thành Công!", "Bạn đã đăng ký thành công!", "success");

      };