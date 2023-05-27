import Hotel from "../models/Hotels.models.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted successfully");
  } catch (err) {
    next(err);
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (err) {
    next(err);
  }
};
export const getAllHotel = async (req, res, next) => {
  try {
    const getAllHotel = await Hotel.find(req.query);
    res.status(200).json(getAllHotel);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
    try {
    const hotelCount=await Hotel.countDocuments({type:"Hotel"})
    const apartmentCount=await Hotel.countDocuments({type:"apartment"})
    const resortCount=await Hotel.countDocuments({type:"resort"})
    const villaCount=await Hotel.countDocuments({type:"villa"})
    const cabinCount=await Hotel.countDocuments({type:"cabin"})
    
      res.status(200).json([
        {type:"Hotel",count:hotelCount},
        {type:"apartments",count:apartmentCount},
        {type:"resorts",count:resortCount},
        {type:"villas",count:villaCount},
        {type:"cabins",count:cabinCount}
    ]);
    } catch (err) {
      next(err);
    }
  };