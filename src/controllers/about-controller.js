export const aboutController = {
  index: {
    handler: function (request, h) {
      const viewData = {
        name: "About Irish Trails",
      };
      return h.view("about-view", viewData);
    },
  },
};
