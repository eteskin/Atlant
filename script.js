//Модальное окно
function showModalWin() {

    var darkLayer = document.createElement('div'); // слой затемнения
    darkLayer.id = 'shadow'; // id чтобы подхватить стиль
    document.body.appendChild(darkLayer); // включаем затемнение

    var modalWin = document.getElementById('popupWin'); // находим наше "окно"
    modalWin.style.display = 'block'; // "включаем" его

    darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
        darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
        modalWin.style.display = 'none'; // делаем окно невидимым
        return false;
    };
}

//Анимация якорей
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

});


//Манипуляции с почтой и прочее
  $("#sendMail").on("click", function() {
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();

    if (name == "") {
      $("#errorMess").text("Введите имя");
      return false;
    } else if (phone == "") {
      $("#errorMess").text("Введите телефон");
      return false;
    }

    $("#errorMess").text("");

    $.ajax({
      url: 'ajax/mail.php',
      type: 'POST',
      cache: false,
      data: { 'name': name, 'phone': phone },
      dataType: 'html',
      beforeSend: function() {
        $("#sendMail").prop("disabled", true);
      },
      success: function(data) {
        if(!data)
          alert("Произошла ошибка, сообщение не отправлено!")
        else $("mailForm").trigger("reset");

        $("#sendMail").prop("disabled", false);
      }
    })

  });
