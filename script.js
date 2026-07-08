document.addEventListener('DOMContentLoaded', function () {

    // ── Mobile nav toggle
    const nav = document.getElementById('nav');
    const toggle = nav.querySelector('.nav-toggle');

    toggle.addEventListener('click', function () {
        const open = nav.classList.toggle('mobile-open');
        toggle.setAttribute('aria-expanded', open);
    });

    // Close mobile nav when a link is clicked
    nav.querySelectorAll('.nav-mobile a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('mobile-open');
            toggle.setAttribute('aria-expanded', false);
        });
    });

    // ── FAQ accordion
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            const answer = btn.nextElementSibling;

            // Close all others
            document.querySelectorAll('.faq-question').forEach(function (other) {
                other.setAttribute('aria-expanded', 'false');
                other.nextElementSibling.hidden = true;
            });

            // Toggle this one
            if (!expanded) {
                btn.setAttribute('aria-expanded', 'true');
                answer.hidden = false;
            }
        });
    });

});
