// //exercise 1:
// const input = $('<input type = "text" placeholder = "Human Name" id = "my-input">')
// const button = $('<button>Add Human</button>');
// $('body').append(input);
// $('body').append(button);
// button.click(function() {
//   const newLi = $(`<li class = "newLi">${$('#my-input').val()}</li>`);
//   $('#list').append(newLi);
//   $('#my-input').val('');
// });


//exercise 2:
// const input = $('<input type = "text" placeholder = "Human Name" id = "my-input">')
// const button = $('<button>Add Human</button>');
// $('body').append(input);
// $('body').append(button);
// button.click(function() {
//   const newLi = $(`<li class = "newLi">${$('#my-input').val()}</li>`);
//   $('#list').append(newLi);
//   $('#my-input').val('');
// });

// $('#list').on('click', '.newLi', function() {
//   $(this).remove();
// });



//exercise 3:
const box1 = '<div id = "box1" class = "box"></div>';
const box2 = '<div id = "box2" class = "box"></div>';
$('body').append(box1);
$('body').append(box2);

$('#box1').hover(function() {
  $('#box2').css('background-color', 'orange');
  $('#box1').css('background-color', '#8e44ad');
});

$('#box2').hover(function() {
  $('#box1').css('background-color', 'orange');
  $('#box2').css('background-color', '#8e44ad');
});

//exercise 4:
$('.item').click(function() {
  if ($(this).data().instock === true) {
    const addItem = `<div class = "cart-item">${$(this).text()}</div>`;
    console.log(addItem);
    $('#cart').append(addItem);
  }
})


//exercise 5:



//exercise 6:



