

// first convert the store to be global 

import Router from "../service/Router.js";
import Store from "../service/Store.js";
import { loadData } from "../service/menu.js";

window.app = {};

// Store 
app.store = Store;

// Creating a router
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    // Load data asynchronously and wait for it to be available
    try {
        await loadData();
        app.router.init();

        console.log(app.store);
    } catch (error) {
        console.error("Error loading data:", error);
    }
});





