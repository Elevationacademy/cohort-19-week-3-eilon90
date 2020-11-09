//Exercise 1:
function StringFormatter() {
    const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
    const skewerCase = function(str) {
        let words = [];
        words = str.split(' ');
        let newStr = words[0];
        for (let i = 1; i <words.length; i++) {
            newStr += '-' + words[i];
        }
        return newStr;
    }
    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}
const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box


//Exercise 2:
function Bank () {
    let money = 500;
    const depositCash = function(cash) {
        money += cash;
    }
    const checkBalance = function() {
        console.log(money);
    }
    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950


//Exercise 3:
function SongsManager() {
    let songs = {};
    const AddSong = function(name, url) {
        let shortUrl = url.replace('https://www.youtube.com/watch?v=', '');
        songs[name] = shortUrl;
    }
    const GetSong = function(name) {
        let shortUrl = songs[name];
        let fixedUrl = 'https://www.youtube.com/watch?v=' + shortUrl;
        return fixedUrl;
    }
    return {
        addSong: AddSong,
        getSong: GetSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

