import { headerTab } from "./modules/header_tab.js"
import { burger } from "./modules/burger.js"
import { cookieModal } from "./modules/cookie_modal.js"
import { contact } from "./modules/contact.js"

window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    // cookieModal()
    headerTab()
    burger()
    contact()
})