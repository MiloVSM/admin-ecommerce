/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "@/components/ProductForm";

export default function editProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then(response => {
        setProductInfo(response.data);
    });
  }, [id]);
  return (
    <Layout>
      <h1>
        <b>Edit Product</b>
          </h1>
          {productInfo && (
              <ProductForm  {...productInfo} />
          )}
    </Layout>
  );
}
