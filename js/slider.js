$('.slick-slider').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 arrows: true,
 vertical: true,
 focusOnSelect: true,
 // asNavFor: '.slick-big',
 verticalSwiping: true,
 prevArrow: '<div class="main__slider--images-arrowup slick-prev"></div>',
 nextArrow: '<div class="main__slider--images-arrowdown slick-next"></div>',
 responsive: [
    {
      breakpoint: 979,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false
      }
    },
    {
      breakpoint: 784,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
        arrows:false,
        dots: true
      }
    }
  ],

});

$('.main__slider--imag').on('click', function() {
  var src = $(this).attr('src');
  // $('.main__slider--imag').removeClass('border-hover');
  // $(this).addClass('border-hover');
  $('.main__slider--bigimg').attr('src', src );
});



// $('.slick-big').slick({
//  slidesToShow: 3,
//  slidesToScroll: 1,
//  asNavFor: '.slick-slider',
//  dots: true,
//  centerMode: true,
//  focusOnSelect: true
// });
//
// var next = $('.main__slider--images-arrowdown');
// $(next).on('click', function() {
//   var element = $('.border-hover').find('img');
//   $(element).next().addClass('border-hover');
//   console.log(element);
// });
// var img = $('.main__slider--images-item');
// console.log(img);
