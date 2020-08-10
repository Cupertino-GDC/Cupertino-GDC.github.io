function scrollToElement(elementName, position) {
    var element = document.getElementById(elementName);
	element.scrollIntoView({behavior: "smooth", block: position, inline: "nearest"});
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function clickLesson(lesson) {
    var header = lesson.getElementsByClassName("lesson-header")[0];
    var info = lesson.getElementsByClassName("lesson-info")[0];

    if (info.style.display == 'block') {
        info.style.display = 'none';
        header.style.borderBottomLeftRadius = "10px";
        header.style.borderBottomRightRadius = "10px";
    } else {
        info.style.display = 'block';
        header.style.borderBottomLeftRadius = "0px";
        header.style.borderBottomRightRadius = "0px";
    }
}