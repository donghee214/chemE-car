  (function($) {
      $(window).scroll(function() {
          $('.leader:in-viewport(350)').run(function() {
              $(".head").addClass("slideDown");
          });
      });

      $(window).scroll(function() {
          $('.stop1:in-viewport(350)').run(function() {
              $(".head1").addClass("slideDown");
              setTimeout(function() {
                  $(".head1").addClass("gif");
              }, 100);
          });
          $('.power1:in-viewport(350)').run(function() {
              $(".head1").addClass("slideDown");
              setTimeout(function() {
                  $(".head1").addClass("gif1");
              }, 100);
          });
          $('.mech1:in-viewport(350)').run(function() {
              $(".head1").addClass("slideDown");
              setTimeout(function() {
                  $(".head1").addClass("gif2");
              }, 100);
          });
          $('.research1:in-viewport(350)').run(function() {
              $(".head1").addClass("slideDown");
              setTimeout(function() {
                  $(".head1").addClass("gif3");
              }, 100);
          });
          $('.research2:in-viewport(650)').run(function() {
              $(".head2").addClass("slideDown");
              setTimeout(function() {
                  $(".head2").addClass("gif3");
              }, 100);
          });

          $('.uno:in-viewport(650)').run(function() {

              $(".head4").addClass("slideDown");
          });
          $('.circuit1:in-viewport(350)').run(function() {
              $(".head1").addClass("slideDown");
              setTimeout(function() {
                  $(".head1").addClass("gif4");
              }, 100);
          });
      });

  }(jQuery));

  $(document).ready(function() {
      $('.main-carousel').flickity({
          // options
          cellAlign: 'left',
          contain: true
      });

      $(".omar").find(".description").click(function() {
          $(this).toggleClass("bottom");
          $(this).find("#arrow1").toggleClass("rotate");
      });
      $(".julia").find(".description").click(function() {
          $(this).toggleClass("bottom");
          $(this).find("#arrow1").toggleClass("rotate");
      });
      $(".twinkle").find(".description").click(function() {
          $(this).toggleClass("bottom");
          $(this).find("#arrow1").toggleClass("rotate");
      });
      $(".claire").find(".description").click(function() {
          $(this).toggleClass("bottom");
          $(this).find("#arrow1").toggleClass("rotate");
      });
      $(".arth").find(".description").click(function() {
          $(this).toggleClass("bottom");
          $(this).find("#arrow1").toggleClass("rotate");
      });
      $(".sarah").find(".description").click(function() {
          $(this).toggleClass("bottom");
          $(this).find("#arrow1").toggleClass("rotate");
      });
      $(".cyril").find(".description").click(function() {
          $(this).toggleClass("bottom");
          $(this).find("#arrow1").toggleClass("rotate");
      });

      $(".rosten").find(".description").click(function() {
          $(this).toggleClass("bottom");
          $(this).find("#arrow1").toggleClass("rotate");
      });

      $(".daniel").find(".description").click(function() {
          $(this).toggleClass("bottom");
          $(this).find("#arrow1").toggleClass("rotate");
      });
      $(".matthew").find(".description").click(function() {
          $(this).toggleClass("bottom");
          $(this).find("#arrow1").toggleClass("rotate");
      });




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


      $(".head").hover(function() {

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
      }, 7000);

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

      $("#contactForm").submit(function(event) {
          event.preventDefault();
          var name = $("#name").val();
          var email = $("#email").val();
          var message = $("#message").val();
          if (name == '') {
              alert("try again");
          } else {
              $.post("/api/send", {
                  name: name,
                  email: email,
                  message: message
              }, function(data) {
                  alert(data);
              });
          }
      });





  });