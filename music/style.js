var nhac =[
	"nhac/01 Dusk Till Dawn.mp3",
	"nhac/I Do.mp3",
	"nhac/04 Demons.mp3",
	"nhac/Just Give Me A Reason.mp3",
	"nhac/Why Not Me.mp3",
	"nhac/havana.mp3",
	"nhac/01 Closer.mp3",
	"nhac/01 Price Tag.mp3",
	"nhac/03 Something Just Like This.mp3",
	"nhac/05 On Top Of The World.mp3",
	"nhac/05 Sugar.mp3",
	"nhac/09 Thunder.mp3",
	"nhac/Stronger.mp3",
	"nhac/Flashlight.mp3",
	"nhac/Scream & Shout.mp3",
	"nhac/Take Me To Your Heart.mp3",
	"nhac/01 Shape of You.mp3",
	"nhac/04 Apologize.mp3",
	"nhac/13 The Monster.mp3",
	"nhac/Beautiful In White.mp3",
	"nhac/06 Timber.mp3",
	"nhac/02 Story Of My Life.mp3",
	"nhac/01 What Makes You Beautiful.mp3",
	"nhac/01 Perfect Duet.mp3",
	"nhac/01 Live While We're Young.mp3",
	"nhac/01 Rude.mp3",
	"nhac/01 Wake Me Up.mp3",
	"nhac/04 That's What I Like.mp3",
	"nhac/06 Until You.mp3",
	"nhac/07 See You Again.mp3",
	"nhac/08 Miss You.mp3",
	"nhac/I Lay My Love On You.mp3",
	"nhac/Seasons In The Sun.mp3",
	"nhac/Soledad.mp3",
	"nhac/Uptown Funk.mp3",
	"nhac/One Thing.mp3",
	"nhac/02 Nothing's Gonna Change My Love For You.mp3",
	"nhac/No Promises.mp3",
	"nhac/15 Payphone.mp3",
	"nhac/The One That Got  Away.mp3",
	"nhac/I`m Yours.mp3",
	"nhac/03 It's Time.mp3",
	"nhac/01 Radioactive.mp3",
];
var anh = [
	"anh/dusk.jpg",
	"anh/ido.png",
	"anh/demons.jpg",
	"anh/just.jpg",
	"anh/why.png",
	"anh/havana.jpg",
	"anh/closer.jpg",
	"anh/price.jpg",
	"anh/some.jpg",
	"anh/on.jpg",
	"anh/sugar.jpg",
	"anh/thunder.jpg",
	"anh/stronger.jpg",
	"anh/flash.jpg",
	"anh/scream.jpg",
	"anh/take.jpg",
	"anh/shape.jpg",
	"anh/sorry.jpg",
	"anh/monster.png",
	"anh/white.jpg",
	"anh/timber.jpg",
	"anh/story.jpg",
	"anh/what.jpg",
	"anh/duet.jpg",
	"anh/live.jpg",
	"anh/rude.jpg",
	"anh/wake.png",
	"anh/that.jpg",
	"anh/until.jpg",
	"anh/see.jpg",
	"anh/miss.jpg",
	"anh/lay.jpg",
	"anh/season.jpg",
	"anh/soledad.jpg",
	"anh/funk.jpg",
	"anh/thing.jpg",
	"anh/nothing.jpg",
	"anh/promises.jpg",
	"anh/phone.jpg",
	"anh/away.jpg",
	"anh/im.jpg",
	"anh/it.jpg",
	"anh/radio.jpg",
];
var show = true;
const body = document.getElementById("bg-body");
const image = document.getElementById("image");
const audio = document.getElementById("audio");
const unrepeat = document.getElementById("unrepeat");
const repeat = document.getElementById("repeat");
image.src =  anh[0];
audio.src = nhac[0];
var number = 0;
document.getElementById('current-song').innerHTML = 'Bài nhạc đang phát: ' + '<span>' + nhac[this.number].slice(5,-4) + '</span>';
function creatOptions() {
	for (var i = 0; i < nhac.length; i++) {
		document.getElementById('select').innerHTML += '<option value="'+i+'">'+ nhac[i].slice(5,-4) + '</option>';
	}
}
function listMusic() {
	for (var i = 0;i < nhac.length; i++) {
		if (document.getElementById('select').value == i) {
			image.src =  anh[i];
			audio.src = nhac[i];
			this.number = i;
			document.getElementById('current-song').innerHTML = 'Bài nhạc đang phát: ' + '<span>' + nhac[i].slice(5,-4) + '</span>'
		}
	}
}
function random(){
	if (this.number==nhac.length) {
		this.number=0;
	}
	this.number = Math.floor(Math.random() * 44);
	image.src = anh[this.number];
	audio.src = nhac[this.number];
	document.getElementById('current-song').innerHTML = 'Bài nhạc đang phát: ' + '<span>' + nhac[this.number].slice(5,-4) + '</span>';
	console.log(this.number)
}
function next(){
	this.number++;
	if (this.number==nhac.length) {
		this.number=0;
	}
	image.src = anh[this.number];
	audio.src = nhac[this.number];
	document.getElementById('current-song').innerHTML = 'Bài nhạc đang phát: ' + '<span>' + nhac[this.number].slice(5,-4) + '</span>';
	console.log(this.number)

}
function back(){
	this.number--;
	if (this.number<0) {
		this.number=nhac.length-1;
	}
	image.src = anh[this.number];
	audio.src = nhac[this.number];
	document.getElementById('current-song').innerHTML = 'Bài nhạc đang phát: ' + '<span>' + nhac[this.number].slice(5,-4) + '</span>'

}
function onRepeat(){
	var loop = document.createAttribute("loop");
	audio.setAttributeNode(loop);
	unrepeat.style = "display: block";
	repeat.style = "display: none";
}
function unRepeat(){
	audio.removeAttribute("loop");
	unrepeat.style = "display: none";
	repeat.style = "display: block";
}
function loadfile(event){
	var fileReader = new FileReader;
	var file = event.target.files[0];
	fileReader.readAsDataURL(file);
	fileReader.onload = function () {
		audio.src = fileReader.result;
	}
}