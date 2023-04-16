import * as Popper from "@popperjs/core";
import * as bootstrap from 'bootstrap';

let width = window.innerWidth;

if (width <= 991) {
    $('header .nav-link').each( function () {
        $(this).click(function () {
            const bsCollapse = new bootstrap.Collapse('#navbarNav', {
                hide: true
            })
        });
    });
}