class NavToggler {
    constructor() {
        this.mainNavToggler = document.querySelector('.main-nav__toggler');
        this.navWraper = document.querySelector('.main-nav__list-wrapper');
        this.closeNav = document.querySelector('.main-nav__close-btn');
        this.events();
    }

    events() {
        this.mainNavToggler.addEventListener('click', () => this.openNavigation());
        this.closeNav.addEventListener('click', () => this.closeNavigation());
        document.addEventListener('keyup', e => this.keyPressHandler(e));
    }

    openNavigation() {
        if(!this.navWraper.classList.contains('main-nav__list-wrapper--visible')) {
            this.navWraper.classList.add('main-nav__list-wrapper--visible');
        }
    }

    closeNavigation() {
        if(this.navWraper.classList.contains('main-nav__list-wrapper--visible')) {
            this.navWraper.classList.remove('main-nav__list-wrapper--visible');
        }
    }

    keyPressHandler(e) {
        if(e.keyCode == 27) {
            this.closeNavigation();
        }
    }
}

export default NavToggler;