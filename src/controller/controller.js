const Clothes = require("../module/Clothes");

exports.getAll = async (req, res, next) => {
  let clothes;
  try {
    clothes = await Clothes.find();
  } catch (err) {
    console.error(err);
  }
  if (!clothes) {
    return res.status(404).json({ message: "No clothes found" });
  }
  return res.status(200).json({ clothes });
};

exports.create = async (req, res, next) => {
  const { name, color, description, price, image } = req.body;
  let clothes;
  try {
    clothes = new Clothes({
      name,
      color,
      description,
      price,
      image,
    });
    await clothes.save();
  } catch (err) {
    console.error(err);
  }
  if (!clothes) {
    return res.status(500).json({ message: "No clothes found" });
  }
  return res.status(200).json({ clothes });
};

exports.update = async (req, res, next) => {
  const id = req.params.id;
  const { name, color, description, price, image } = req.body;
  let clothes;
  try {
    clothes = await Clothes.findByIdAndUpdate(id, {
      name,
      color,
      description,
      price,
      image,
    });
    clothes = await clothes.save();
  } catch (err) {
    console.error(err);
  }
  if (!clothes) {
    return res.status(500).json({ message: "Fail to update" });
  }
  return res.status(200).json({ clothes });
};

exports.delete = async (req, res, next) => {
  const id = req.params.id;
  let clothes;
  try {
    clothes = await Clothes.findByIdAndRemove(id);
  } catch (err) {
    console.error("Fail to delete");
  }
  return res.status(200).json({ message: "oke roi" });
};
