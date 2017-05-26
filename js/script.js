$(function() {
  var list = $('.main__product--selection-color-variant');

  // header-top menu buttons end
  var basketNumber = 0;
  var quantity = 1;
  var daysNumber = 3;
  var daysText = " дня,";
  var hours = '00';
  var minutes = '00';
  var seconds = '00';
  $('.header__top--login-basket-quantityofgoods').append(basketNumber);
  $('.main__product--selection-timer-days').append(daysNumber + daysText);
  $('.main__product--selection-timer-hours').append(hours + ':' + minutes + ':' + seconds);
  $('.main__product--selection-quantity-choose-product').append(quantity);

  $(".slick-dots li button").empty();

  // plus-minus, backet in favorite
  $('.main__product--selection-quantity-choose-plus').on('click', function() {
    $('.main__product--selection-quantity-choose-product').empty();
    quantity = quantity + 1;
    $('.main__product--selection-quantity-choose-product').append(quantity);
  });
  $('.main__product--selection-quantity-choose-minus').on('click', function() {
    $('.main__product--selection-quantity-choose-product').empty();
    quantity = quantity - 1;
    $('.main__product--selection-quantity-choose-product').append(quantity);
  });
  $('.main__product--selection-quantity-add-tobasket').on('click', function(e) {
    e.preventDefault();
    $('.header__top--login-basket-quantityofgoods').empty();
    basketNumber = quantity;
    $('.header__top--login-basket-quantityofgoods').append(basketNumber);
  });
  // plus-minus, backet in favorite end

  // accordion
  $(function() {
    var comments = $('.main__product--selection-about-description-info');
    var accordion = $('.main__product--selection-about-description-block');
    $(comments).not(':first').hide();
    $(accordion).children('.main__product--selection-about-description-plus').filter(':first').addClass('main__product--selection-about-description-minus');
    $(accordion).on('click', function(event) {
      $(accordion).children().removeClass('main__product--selection-about-description-minus');
      $(comments).slideUp(900);
      $(event.currentTarget).next('.main__product--selection-about-description-info').slideToggle(600);
      $(event.currentTarget).children().toggleClass('main__product--selection-about-description-minus');
    });
  });
  // accordion END

  var colors = ['Серый', 'Синий', 'Желтый', 'Красный', 'Зеленый'];
  var lists = $('.main__product--selection-color-variant');
  $(lists).on('click', function(e) {
    var select = (e.currentTarget);
    var liNum = $(lists).index(select);
    $(lists).removeClass('border-hover');
    $(select).addClass('border-hover');
    var color = colors[liNum];
    $('.main__product--selection-color-name').empty();
    $('.main__product--selection-color-name').append(color);
  });
});

var sizeLi = $('.main__product--selection-size-variants li');
$(sizeLi).on('click', function() {
  $(sizeLi).removeClass('border-hover');
  if($(this).hasClass('nosize')) {
  return false;
} else {
  $(this).addClass('border-hover');
}
});
