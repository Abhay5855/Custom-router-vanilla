const API = {
  url: "/data/menu.json",

  fetchData: async () => {
    const result = await fetch(API.url);

    return await result.json();
  },
};

export default API;
