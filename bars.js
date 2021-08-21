function navDrop() {
	var x = document.getElementById('navlinks');
	if (x.style.display === 'flex') {
		x.style.display = 'none';
	} else {
		x.style.display = 'flex';
	}
}