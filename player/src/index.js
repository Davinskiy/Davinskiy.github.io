let video_cnt = document.querySelector(".js-video-cnt");

function playVideo(obj){
	let video = obj.querySelector('video');

	video.play();

	setTimeout(() => {
		video.muted = false;
	}, 150);

	video.addEventListener("timeupdate", function() {
		getMediaProgress(this);
	}, false);

	video.addEventListener("onended", function() {
		getMediaProgress(this);
	}, false);
}

playVideo(video_cnt);

function getMediaProgress(video){
	let cur_time = video.currentTime;
	let dur = video.duration;

	let percent = (cur_time / dur) * 100;

	let progress_bar = getClosest(video, 'js-video-cnt').querySelector('.js-video-progress');

	progress_bar.style.width = percent + '%';
}

window.videoPause = function(video){
	if (video.nodeName != 'VIDEO')
		video = getClosest(video, 'js-video-cnt').querySelector('video');
	if(!video.paused){
		video.pause();
		video_cnt.classList.add('pause');
	}
}

window.videoPlay = function(video){
	if (video.nodeName != 'VIDEO')
		video = getClosest(video, 'js-video-cnt').querySelector('video');
	if(video.paused){
		video.play();
		video_cnt.classList.remove('pause');
	}
}

window.videoMute = function(video){
	if (video.nodeName != 'VIDEO')
		video = getClosest(video, 'js-video-cnt').querySelector('video');

	video.muted = !video.muted;
	video_cnt.classList.toggle('mute');
}

function getClosest(el, className) {
	let parent = el.parentElement;

	if (parent.nodeName == 'BODY') return;
	if (hasClass(parent, className)) return parent;

	return getClosest(parent, className);
}

function hasClass(element, className) {
	return new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.className);
}