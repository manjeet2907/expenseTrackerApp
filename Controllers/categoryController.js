import Category from "../Models/categoryModel.js";

//@description     Create a Category
//@route           POST /api/categories
//@access          Public
const create_Categories = async (req, res) => {
  const { type, color } = req.body;
  const Create = new Category({
    type,
    color,
  });

  try {
    await Create.save();
    res.json(Create);
  } catch (error) {
    res.json({
      message: `Error while creating categories ${err}`,
    });
  }
};

//@description     Get a Category
//@route           get /api/categories
//@access          Public
const get_Categories = async (req, res) => {
  let data = await Category.find({});

  let filter = await data.map((v) =>
    Object.assign({}, { type: v.type, color: v.color })
  );
  return res.json(filter);
};

export { create_Categories, get_Categories };
