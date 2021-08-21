$(window).ready(function () {
	$(function () {
		$("footer").load("/footer.html");
	});
	var w = $(window).width();
	if (w < 768) {
		cellSize();
	} else {
		makeLarge();
	};
});

$(window).resize(function () {
	var w = $(window).width();
	if (w < 768) {
		cellSize();
	} else {
		makeLarge();
	};
});

var cellSize = function () {
	$("header").load("/header.html nav");
	$("#sidebar").load("/header.html #navlinks");
};

var makeLarge = function () {
	$("header").load("/header.html nav");
	$("#sidebar").load("/header.html #navlinks");
};

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js').then(() => {
			console.log('Service Worker Registered')
		})
	})
}