import axios from "axios";
import { maggie, serviceUrl } from "../fixtures.js";

export const trailtimeService = {
  trailtimeUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.trailtimeUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.trailtimeUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    try {
      const res = await axios.get(`${this.trailtimeUrl}/api/users`);
      return res.data;
    } catch (e) {
      return null;
    }
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.trailtimeUrl}/api/users`);
    return res.data;
  },

  async createTraillist(traillist) {
    const res = await axios.post(`${this.trailtimeUrl}/api/traillists`, traillist);
    return res.data;
  },

  async deleteAllTraillists() {
    const response = await axios.delete(`${this.trailtimeUrl}/api/traillists`);
    return response.data;
  },

  async deleteTraillist(id) {
    const response = await axios.delete(`${this.trailtimeUrl}/api/traillists/${id}`);
    return response;
  },

  async getAllTraillists() {
    const res = await axios.get(`${this.trailtimeUrl}/api/traillists`);
    return res.data;
  },

  async getTraillist(id) {
    const res = await axios.get(`${this.trailtimeUrl}/api/traillists/${id}`);
    return res.data;
  },

  async getAllTrails() {
    const res = await axios.get(`${this.trailtimeUrl}/api/trails`);
    return res.data;
  },

  async createTrail(id, trail) {
    const res = await axios.post(`${this.trailtimeUrl}/api/traillists/${id}/trails`, trail);
    return res.data;
  },

  async deleteAllTrails() {
    const res = await axios.delete(`${this.trailtimeUrl}/api/trails`);
    return res.data;
  },

  async getTrail(id) {
    const res = await axios.get(`${this.trailtimeUrl}/api/trails/${id}`);
    return res.data;
  },

  async deleteTrail(id) {
    const res = await axios.delete(`${this.trailtimeUrl}/api/trails/${id}`);
    return res.data;
  },
  async authenticate(user) {
    const response = await axios.post(`${this.trailtimeUrl}/api/users/authenticate`, user);
    axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
    return response.data;
  },

  async clearAuth() {
    axios.defaults.headers.common["Authorization"] = "";
  },
};
