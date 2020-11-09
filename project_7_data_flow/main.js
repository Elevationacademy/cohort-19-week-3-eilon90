let posts = [
    {name: 'Moshe', text: 'Happy birthday!'},
    {name: 'Shaul', text: 'Mazal tov!'},
    {name: 'Yossi', text: 'We love you!'},
    {name: 'sara', text: "Let's party!"},
    {name: 'Gadi', text: 'HBD!!'}
];

const listArea = $(`<div id = "list-area"></div>`);
$('#exercise-1').append(listArea);
$('#list-area').css('margin-top', '20px');

function render() {
    for (post of posts) {
        const div = $(`<div class = "posts"><strong>${post.name}:</strong> ${post.text}</div>`);
        $('#list-area').append(div);
    }
}

render();

$('#submit').click(function() {
    $('#list-area').empty();
    const name = $('#name').val();
    const text = $('#text').val();
    posts.push({name: name, text: text});
    render();
})
