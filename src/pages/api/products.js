import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }

  if (method === "POST") {
    const { title, category, price, description } = req.body;
    const productDocument = await Product.create({
      title,
      category,
      price,
      description,
    });

    res.json(productDocument);
  }

  if (method === "PUT") {
    const { title, category, price, description, _id } = req.body;
    await Product.updateOne({ _id }, { title, category, price, description });
    res.json(true);
    }
    
    if (method === "DELETE") {
        if (req.query?.id) {
            res.json(await Product.deleteOne({ _id: req.query.id }));
            res.json(true);
        }
    }
}
