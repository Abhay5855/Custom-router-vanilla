// const Router = {
//   init: () => {
//     document.querySelectorAll("a.navlink")?.forEach((link) => {
//       //restrict the link to preform default routing behaviour
//       link.addEventListener("click", (e) => {
//         e.preventDefault();
//         const url = link?.getAttribute("href");
//         Router.go(url);
//       });
//     });

//     // Forward and back Buttons
//     window.addEventListener("popstate", (event) => {
//       Router.go(event.state.route, false);
//     });

//     //Check the initial URL
//     Router.go(location.pathname);
//   },

//   go: (route, addToHistory = true) => {
//     console.log(`Go to the ${route} page`);

//     if (addToHistory) {
//       //using pushstate method
//       history.pushState({ route }, "", route);
//     }
//     let pageElement = null;

//     switch (route) {
//       case "/":
//            pageElement = document.createElement("menu-page");
//         break;

//       case "/order":
//         pageElement = document.createElement("h1");
//         pageElement.textContent = "Order Page";
//         break;

//       default:
//         if (route.startsWith("/product")) {
//           console.log("product page called");
//           pageElement = document.createElement("details-page");
//           let paramId = route.substring(route.lastIndexOf("-") + 1);
//           pageElement.dataset.id = paramId;
//         }
//     }

//     if (pageElement) {
//        // document.querySelector("main").children[0].remove();
//             const cache = document.querySelector("main");
//             cache.innerHTML = "";
//             cache.appendChild(pageElement);
//             window.scrollX = 0;
//             window.scrollY = 0;
//     } else {
//       document.querySelector("main").innerHTML = "Oups, 404!"
//     }
//   },

//   //Function to navigate to the route - similar as history.push();
//   navigateTo: (route) => {
//     Router.go(route);
//   },

//   //Function to replace the router -
//   replaceRoute: (route) => {
//     Router.go(route, false);
//   },

//   //Function to go back -
//   goBack: () => {
//     history.back();
//   },
// };

// export default Router;

const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                // const url1 = event.target.href;
                const url = event.target.getAttribute("href");
                Router.go(url);
            });
        })
        // Event Handler for URL changes
        window.addEventListener("popstate", event => {
            Router.go(event.state.route, false);
        });

        // Check the initial URL
        Router.go(location.pathname);
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`);

        if (addToHistory) {
            history.pushState({ route }, '', route);
        }
        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("menu-page");
                break;
            case "/order":
                pageElement = document.createElement("order-page");
                break;

            default:
                if (route.startsWith("/product-")) {
                    console.log("This is product page");
                    pageElement = document.createElement("details-page");
                    const paramId = route.substring(route.lastIndexOf("-")+1);
                    pageElement.dataset.productId = paramId;
                }
        }
        if (pageElement) {
            // document.querySelector("main").children[0].remove();
            const cache = document.querySelector("main");
            cache.innerHTML = "";
            cache.appendChild(pageElement);
            window.scrollX = 0;
            window.scrollY = 0;

        } else {
            // 404
            document.querySelector("main").innerHTML = "Oups, 404!"

        }
    }
}
export default Router;
