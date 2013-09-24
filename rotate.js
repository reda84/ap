//pre-load images

var listImg = new Image();
listImg.src = 'http://heatscript.com/upload/image/1246529311.jpg';
var list2Img = new Image();
list2Img.src = 'http://heatscript.com/upload/image/1247128345.jpg';


function makeNews(c,l,f,i){
	this.copy = c;
	this.link = l;
	this.follow = f;
	this.img = i;
	this.write = writeNews;
}

function writeNews(){
	var str = '';
	str += '<a href="' + this.link + '">';
	str += '<img border="0" src="' + this.img.src + '"></a><br>';
	str += this.copy + '<br>';
        str +=  '<a href="' + this.link + '">' + this.follow + '</a>';
	return str;
}

var newsArray = new Array();

newsArray[0] = new makeNews("Da",'http://www.heatscript.com','Read More',listImg).write();
newsArray[1] = new makeNews("drghdgjhkgholhiopyui9olhkjl,.nnn.uhil",'http://www.heatscript.com','Read More',list2Img).write();

var nIndex = 0;
var timerID = null;
function rotateNews(){
	var len = newsArray.length;
	if(nIndex >= len)
		nIndex = 0;
	document.getElementById('stories').innerHTML = newsArray[nIndex];
	nIndex++;
	timerID = setTimeout('rotateNews()',6000);
}
function pauseNews() {
	if (timerID != null) {
		clearTimeout(timerID);
		timerID = null;
	}
}

function playNews() {
	if (timerID == null) {
		timerID = setTimeout('rotateNews()', 1000);
	}
}



