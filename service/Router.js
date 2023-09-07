const Router = {
  init: () => {
    document.querySelectorAll("a.navlink")?.forEach((link) => {
      //restrict the link to preform default routing behaviour
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const url = link?.getAttribute("href");
        Router.go(url);
      });
    });

    // Forward and back Buttons
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    //Check the initial URL
    Router.go(location.pathname);
  },

  go: (route, addToHistory = true) => {
    console.log(`Go to the ${route} page`);

    if (addToHistory) {
      //using pushstate method
      history.pushState({ route }, "", route);
    }
    let pageElement = null;
    let errorPage = null;

    switch (route) {
      case "/":
           pageElement = document.createElement("menu-page");
        
        break;

      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Order Page";
        break;

      default:
        if (route.startsWith === "/product/") {
          pageElement = document.createElement("h1");
          pageElement.textContent = "Product";
          let paramId = route.substring(route.lastIndexOf("/") + 1);
          pageElement.dataset.id = paramId;
        }
    }

    if (pageElement) {
      document.querySelector("main").innerHTML = "";
      document.querySelector("main").appendChild(pageElement);
      // IF navigating go the topmost of page
      window.scrollX = 0;
      window.scrollY = 0;
    } else {
      errorPage = document.createElement("h1");
      errorPage.textContent = "404 Not Found";
      document.getElementById("error_page").appendChild(errorPage);
    }
  },

  //Function to navigate to the route - similar as history.push();
  navigateTo: (route) => {
    Router.go(route);
  },

  //Function to replace the router -
  replaceRoute: (route) => {
    Router.go(route, false);
  },

  //Function to go back -
  goBack: () => {
    history.back();
  },
};

export default Router;
