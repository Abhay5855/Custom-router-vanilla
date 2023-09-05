
// Calll the API 

import API from "./API.js";

export async function loadData(){


     app.store.menu = await API.fetchData();

      
}