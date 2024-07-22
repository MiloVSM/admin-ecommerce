import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AddProduct() {
  return (
    <Layout>
      <h1>
        <b>New Product</b>
      </h1>
      <ProductForm></ProductForm>
    </Layout>
  );
}
