$('.generator').click(function() {

    console.log(`Processor ID: ${$(this).closest('div').attr('id')}`);
    console.log(`Computer's data-id: ${$(this).closest('.computer').data().id}`);
    console.log(`BUS: ${$(this).closest('.computer').find('.BUS').text()}`);
});

$('.validator').on('click', function() {
    console.log(`generator's text: ${$(this).closest('.computer').find('.generator').text()}`);
    console.log(`MB: ${$(this).closest('.computer').find('.MB').text()}`);
    console.log(`QRs: ${$(this).closest('.computer').find('.QR').first().text()}, ${$(this).closest('.computer').find('.QR').last().text()}`);
});