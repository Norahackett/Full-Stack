import { v4 } from "uuid";

let trails = [];

export const trailMemStore = {
  async getAllTrails() {
    return trails;
  },

  async addTrail(traillistId, trail) {
    trail._id = v4();
    trail.traillistid = traillistId;
    trails.push(trail);
    return trail;
  },

  async getTrailsByTraillistId(id) {
    return trails.filter((trail) => trail.traillistid === id);
  },

  async getTrailById(id) {
    let trail = trails.find((trail) => trail._id === id);
    if (trail == undefined) {
      trail = null;
    }
    return trail;
  },

  async getTraillistTrails(traillistId) {
    return trails.filter((trail) => trail.traillistid === traillistId);
  },

  async deleteTrail(id) {
    const index = trails.findIndex((trail) => trail._id === id);
    if (index !== -1) trails.splice(index, 1);
  },

  async deleteAllTrails() {
    trails = [];
  },

  async updateTrail(trail, updatedTrail) {
    trail.name = updatedTrail.name;
    trail.lat = updatedTrail.lat;
    trail.lon = updatedTrail.lon;
    trail.lat = updatedTrail.lat;
    trail.county = updatedTrail.county;
    trail.description = updatedTrail.description;
  },
};
