function imageSlider() {

    var sliders = document.getElementsByClassName("image-slider");
    // sliders.forEach(slider => slider.remove());
    while (sliders.length > 0) {
        sliders[0].parentNode.removeChild(sliders[0]);
    }

    var baseImgs = document.getElementsByClassName("image-slider-image");
    var imgs = document.getElementsByClassName("image-slider-overlay");
    

    for (i = 0; i < imgs.length; i++) {
        makethethingdothething(imgs[i], baseImgs[i]);
    }

    function makethethingdothething(img, baseImg) {
        img.style.width = "17vw";
        baseImg.style.width = "17vw";
        baseImg.style.left = "0";

        var clicked = false;
        var h = img.offsetHeight;
        var w = img.offsetWidth;

        img.style.width = (w / 2) + "px";
        baseImg.style.width = (w / 2) + "px";
        baseImg.style.left = (w / 2) + "px";

        var slider = document.createElement("DIV");
        slider.setAttribute("class", "image-slider");
        img.parentElement.insertBefore(slider, img);

        // slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.top = "-20px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";

        slider.addEventListener("mousedown", slideStart);
        slider.addEventListener("touchstart", slideStart);
        window.addEventListener("mouseup", slideFinish);
        window.addEventListener("touchend", slideFinish);


        function slideStart(e) {
            e.preventDefault();
            clicked = true;
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        function slideFinish() {
            clicked = false;
        }

        function slideMove(e) {
            if (clicked == false) {
                return false;
            }
            var pos = getCursorPos(e)
            if (pos < 0) {
                pos = 0;
            }
            if (pos > w) {
                pos = w;
            }

            slide(pos);
        }

        function slide(pos) {
            img.style.width = pos + "px";
            baseImg.style.width = w - pos + "px";
            baseImg.style.left = pos + "px";
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }

        function getCursorPos(e) {
            var e = (e.changedTouches) ? e.changedTouches[0] : e;
            var a = img.getBoundingClientRect();

            var x = e.pageX - a.left;
            x = x - window.pageXOffset;
            return x;
        }


    }

    window.onresize = imageSlider;
} 