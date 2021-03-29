/* Events */

video.addEventListener('play', function() {
	vidInterval = setInterval(html5glasses,200);
});

video.addEventListener('ended', function() {
	clearInterval(vidInterval);
	time_dump.innerHTML = "finished";
});