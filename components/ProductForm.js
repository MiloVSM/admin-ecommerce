import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

export default function ProductForm({
  _id,
  title: existingTitle,
  category: existingCategory,
  price: existingPrice,
  description: existingDescription,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [category, setCategory] = useState(existingCategory || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [returnToProducts, setReturnToProducts] = useState(false);
  const router = useRouter();

  async function saveProduct(e) {
    e.preventDefault();
    const data = { title, category, price, description };
    if (_id) {
      // update
        await axios.put("/api/products", { ...data, _id });
    } else {
      // create
      await axios.post("/api/products", data);
      }
      setReturnToProducts(true);
  }

  if (returnToProducts) {
    router.push("/products");
  }

  return (
    <form onSubmit={saveProduct}>
      <div className="flex gap-3 w-full">
        <div className="flex flex-col w-full">
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div className="flex flex-col w-full">
          <label>Category</label>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></input>
        </div>
      </div>

      <div className="flex flex-col">
        <label>Price</label>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
      </div>

      <div className="flex flex-col">
        <label>Description</label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn-primary mt-3">
        Save
      </button>
    </form>
  );
}
