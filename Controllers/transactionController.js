import Transaction from "../Models/transactionModel.js";

//@description     Create a Transaction
//@route           POST /api/transaction
//@access          Public
const create_Transaction = async (req, res) => {
  if (!req.body) return res.status(400).json("Post HTTP Data not Provided");
  let { name, type, amount } = req.body;

  const create = await new Transaction({
    name,
    type,
    amount,
    date: new Date(),
  });

  try {
    await create.save();
    res.json(create);
  } catch (error) {
    res.json({
      message: `Error while creating categories ${err}`,
    });
  }
};

//@description     fetch Transactions
//@route           get /api/transaction
//@access          Public
const get_Transaction = async (req, res) => {
  let data = await Transaction.find({});
  return res.json(data);
};

//@description     delete a Transactions
//@route           get /api/transaction
//@access          Public
const delete_Transaction = async (req, res) => {
  if (!req.body) res.status(400).json({ message: "Request body not Found" });
  await Transaction.deleteOne(req.body, function (err) {
    if (!err) res.json("Record Deleted...!");
  })
    .clone()
    .catch(function (err) {
      res.json("Error while deleting Transaction Record");
    });
};

//  get: http://localhost:8080/api/labels
const get_Labels = async (req, res) => {
  Transaction.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "categories_info",
      },
    },
    {
      $unwind: "$categories_info",
    },
  ])
    .then((result) => {
      let data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info["color"],
          }
        )
      );
      res.json(data);
    })
    .catch((error) => {
      res.status(400).json("Looup Collection Error");
    });
};

export { create_Transaction, get_Transaction, delete_Transaction, get_Labels };
