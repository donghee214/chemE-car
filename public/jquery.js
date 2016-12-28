// show the element
// and do the animation you want


$(window).load(function() {
    if (!localStorage.noFirstVisit) {
        setTimeout(function() {
            $(".se-pre-con").fadeOut("slow");
        }, 3200);
    } else {
        $(".se-pre-con").remove()
    };
});


(function($) {

    $(document).ready(function() {
        if (!localStorage.noFirstVisit) {
            $(function() {
                $(".title1").typed({
                    strings: ["Build a chemically powered car.", "Compete in regional competitions.", "Learn More."],
                    typeSpeed: 5,
                    backSpeed: 0,
                    startDelay: 3000
                });
                setTimeout(function() {
                    $(".test").fadeIn();
                }, 11000);
            });
            $(window).scroll(function() {
                $('.style1:in-viewport(600)').run(function() {
                    $(".style1").addClass("fadeIn");
                    setTimeout(function() {
                        $(".style2").addClass("fadeIn");
                    }, 300);
                    setTimeout(function() {
                        $(".style3").addClass("fadeIn");
                    }, 600);
                    setTimeout(function() {
                        $(".style4").addClass("fadeIn");
                    }, 900);
                    setTimeout(function() {
                        $(".style5").addClass("fadeIn");
                    }, 1200);
                    setTimeout(function() {
                        $(".style6").addClass("fadeIn");
                    }, 1500);
                });
                localStorage.noFirstVisit = "1";

            });
        } else {
            $(".style1").css("opacity", "1");
            $(".style2").css("opacity", "1");
            $(".style3").css("opacity", "1");
            $(".style4").css("opacity", "1");
            $(".style5").css("opacity", "1");
            $(".style6").css("opacity", "1");
            $(".title1").typed({
                strings: ["Learn More."],
                typeSpeed: 0,
                backSpeed: 0,
                startDelay: 500
            });
            setTimeout(function() {
                $(".test").fadeIn();
            }, 500);
        }
    });





}(jQuery));



$(document).ready(function() {
    var deadline = '2017-3-15';

    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    getTimeRemaining(deadline).minutes;

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var timeinterval = setInterval(function() {
            var t = getTimeRemaining(endtime);
            clock.innerHTML = 'Regional Competition:' + t.days + ':' +
                +t.hours + ':' +
                +t.minutes + ':' +
                +t.seconds;
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        });
    }

    initializeClock('title4', deadline);

    $(".email").click(function() {
        $(".fixed").css("z-index", "10");
        $(".fixed").css("opacity", "1");
        $(".modal").css("opacity", "1");
        $(".modal").removeClass("animateBack").addClass("animatetop");
    });

    $(".fa-usd").click(function() {
        $(".social").append("<b>Sponsorship packages coming soon!</b>");
        $(".fa-usd").off("click");
    });

    $(".exit").click(function() {
        $(".modal").removeClass("animateTop").addClass("animateBack");
        $(".modal").css("opacity", "0");
        $(".fixed").css("opacity", "0");
        setTimeout(function() {
            $(".fixed").css("z-index", "-1");
        }, 200);

    });
    $(".test").hide();

    setTimeout(function() {
        $(".test").fadeIn();
    }, 11000);

    $(".learn").click(function() {
        $("html").scrollTop();
    });

    $('.title1').click(function() {
        $("html, body").animate({ scrollTop: $(window).height() }, 600);
    });
    $(".title1").hover(function() {
        $(this).css("color", "#ccc");
        $(this).css("cursor", "pointer");
        $(".test").css("color", "#ccc");

    }, function() {
        $(this).css("color", "white");
        $(".test").css("color", "white");
        $(this).css("cursor", "default");
    });

    $(".image").hover(function() {
        $(".tiles").css("background-color", "transparent");
    });


     var numberOfVisits = 0;
     numberOfVisits = numberOfVisits + 1;
     console.log(numberOfVisits);

    $("#contactForm").submit(function(event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        if (name == '') {
            alert("try again");
        if (email != '@') {
            alert("try again");
        }
        } else {
            $.post("/api/send", {
                name: name,
                email: email,
                message: message
            }, function(data) {
                $("#title").html("");
                $("#title").append("Thank you!");
            });
        }
    });




});