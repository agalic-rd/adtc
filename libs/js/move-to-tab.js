document.addEventListener('DOMContentLoaded', function () {
    var hash = window.location.hash;
    if (!hash) { return; }
    var selector = 'a.nav-link[data-bs-toggle="tab"][data-bs-target="' + hash + '"]';
    var tabTriggerEl = document.querySelector(selector);
    if (!tabTriggerEl) { return; }
    var tab = new window.bootstrap.Tab(tabTriggerEl);
    tab.show();

    window.scrollTo(0, 0);
    // Clear hash after activation
    if (history.replaceState) {
        history.replaceState(null, '', window.location.pathname);
    } else {
        window.location.hash = '';
    }
});