import { TrailSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const trailController = {
  index: {
    handler: async function (request, h) {
      const traillist = await db.traillistStore.getTraillistById(request.params.id);
      const trail = await db.trailStore.getTrailById(request.params.trailid);
      const viewData = {
        name: "Edit Trail",
        traillist: traillist,
        trail: trail,
      };
      return h.view("trail-view", viewData);
    },
  },

  update: {
    validate: {
      payload: TrailSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("trail-view", { name: "Edit trail error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const trail = await db.trailStore.getTrailById(request.params.trailid);
      const newTrail = {
        name: request.payload.name,
        lat: request.payload.lat,
        lon: request.payload.lon,
        county: request.payload.county,
        description: Number(request.payload.description),
      };
      await db.trailStore.updateTrail(trail, newTrail);
      return h.redirect(`/traillist/${request.params.id}`);
    },
  },
};
