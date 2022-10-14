// =============sticky header===========
const header = document.querySelector('.header');
const headerTop = header.offsetTop

function headerTopFix() {
    if (window.scrollY >= headerTop) {
        header.classList.add("header_sticky");
    } else {
        header.classList.remove("header_sticky");
    }
}

window.onscroll = function() {headerTopFix()};
// =============sticky header===========

// =============glitch btn===========
// Glitch Timeline Function
var $text = document.querySelector(".btn_glitch_active"),
    $filter = document.querySelector(".svg_sprite"),
    $turb = $filter.querySelector("#filter feTurbulence"),
    turbVal = { val: 0.000001 },
    turbValX = { val: 0.000001 };

var glitchTimeline = function () {
    var timeline = new TimelineMax({
        repeat: -1,
        repeatDelay: 2,
        paused: true,
        onUpdate: function () {
            $turb.setAttribute("baseFrequency", turbVal.val + " " + turbValX.val);
        }
    });

    timeline.to(turbValX, 0.1, { val: 0.5 }).to(turbVal, 0.1, { val: 0.02 });
    timeline.set(turbValX, { val: 0.000001 }).set(turbVal, { val: 0.000001 });
    timeline
        .to(turbValX, 0.2, { val: 0.4 }, 0.4)
        .to(turbVal, 0.2, { val: 0.002 }, 0.4);
    timeline.set(turbValX, { val: 0.000001 }).set(turbVal, { val: 0.000001 });

    // console.log("duration is: " + timeline.duration());

    return {
        start: function () {
            timeline.play(0);
        },
        stop: function () {
            timeline.pause();
        }
    };
};

btnGlitch = new glitchTimeline();

$(".btn_glitch")
    .on("mouseenter", function () {
        $(this).addClass("btn_glitch_active");
        btnGlitch.start();
    })
    .on("mouseleave", function () {
        var $this = $(this);
        if ($this.hasClass("btn_glitch_active")) {
            $this.removeClass("btn_glitch_active");
            btnGlitch.stop();
        }
    });

// =============glitch btn===========
