import Mongoose from "mongoose";

const { Schema } = Mongoose;

const trailSchema = new Schema({
  name: String,
  lat: Number,
  lon: Number,
  county: String,
  description: String,
  traillistid: {
    type: Schema.Types.ObjectId,
    ref: "Traillist",
  },
});

export const Trail = Mongoose.model("Trail", trailSchema);
