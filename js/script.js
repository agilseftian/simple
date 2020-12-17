window.onload = function() {

var about = e('about'),
	social = e('social'),
	contact = e('contact'),
	toAbout = e('toAbout'),
	toSocial = e('toSocial'),
	toContact = e('toContact');


function e(el) {
	return document.getElementById(el);
}

var control = {
	silence: function (pg1, pg2) {

		if (pg1.style.opacity !== 0) {
			pg1.style.opacity = 0;
			pg1.style.zIndex = -2;
			pg1.style.position = 'absolute';
		}

		if(pg2.style.opacity !== 0) {
			pg2.style.opacity = 0;
			pg2.style.zIndex = -2; 
			pg2.style.position = 'absolute';
		}

},

	rise: function rise(pg) {
		pg.style.opacity = 1;
		pg.style.zIndex = 1;
		pg.style.position = 'static';
		}

}


function onlyAbout() {
	control.silence(social, contact);
	control.rise(about);

	return false;
}

function onlySocial() {
	control.silence(about, contact);
	control.rise(social);

	return false;
}

function onlyContact() {
	control.silence(about, social);
	control.rise(contact);

	return false;
}


toAbout.onclick = onlyAbout;
toSocial.onclick = onlySocial;
toContact.onclick = onlyContact;

onlyAbout();
}