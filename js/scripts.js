$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 200) {
    $('header').addClass('fixed');
  } else {
    $('header').removeClass('fixed');
  }
});

// Reveal-on-scroll: JS adds the class, so content stays visible without JS.
(function () {
  var items = document.querySelectorAll('main > section, main > footer');
  if (!items.length) return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduceMotion) {
    return;
  }

  var fired = false;

  var observer = new IntersectionObserver(
    function (entries) {
      fired = true;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  items.forEach(function (item) {
    item.classList.add('reveal');
    observer.observe(item);
  });

  // Stagger the feature cards and client logos.
  document.querySelectorAll('#features .m-3, #clients .logo').forEach(function (el, i) {
    el.style.setProperty('--i', i);
  });

  // Safety net: only if the observer never fired (broken/unsupported runtime),
  // reveal everything so content is never left hidden.
  window.setTimeout(function () {
    if (fired) return;
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }, 3000);
})();

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        // Keep the target clear of the sticky navigation.
        var offset = ($('.sticky-top').outerHeight() || 0) + 16;
        $('html, body').animate(
          {
            scrollTop: Math.max(target.offset().top - offset, 0)
          },
          700,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

$('#navigation a').click(function () {
  $('#navbar-menu-items').removeClass('in');
});

function mail() {
  document.location.href = 'mailto:contact' + '@' + 'assistaddict.com';
}

function sms() {
  document.location.href = 'sms:' + '+33' + '764071910';
}
