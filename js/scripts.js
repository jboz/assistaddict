$(window).bind("scroll", function() {
  if ($(window).scrollTop() > 200) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 271
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

var $form = $("form#contact-form"),
  url =
    "https://script.google.com/macros/s/AKfycbw1sG6X_RfppoNoL9maLe0JgGu_f1m6tDH7FW7hkSXZfGa-KoSN/exec";

$("#submit-contact-form").on("click", function(e) {
  $("form#contact-form .alert")
    .finish()
    .hide();

  // validate form data
  if (
    !$("#contact-form_email").val() ||
    !$("#contact-form_nom").val() ||
    !$("#contact-form_message").val()
  ) {
    return;
  }
  // validate email format
  if (!validateEmail($("#contact-form_email").val())) {
    $("form#contact-form .error-email")
      .show(500)
      .delay(10000)
      .hide(500);
    return false;
  }

  // send data
  $("form#contact-form .alert-info").show(500);
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "POST",
    dataType: "json",
    data: $form.serializeObject(),
    success: function() {
      // success
      $("form#contact-form .alert").hide();
      $("form#contact-form .alert-success")
        .show(500)
        .delay(5000)
        .hide(500);
    },
    error: function() {
      // unexpected error
      $("form#contact-form .alert").hide();
      $("form#contact-form .error-unexpected")
        .show(500)
        .delay(10000)
        .hide(500);
    }
  });
});

function mail() {
  document.location.href = "mailto:contact" + "@" + "assistaddict.com";
}
