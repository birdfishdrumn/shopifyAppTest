import { ResourcePicker} from "@shopify/app-bridge-react";
import { SelectPayload } from "@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker";

import { EmptyState, Heading, Page } from "@shopify/polaris";
import {useState,useEffect} from "react"
import ProductEmptyState from "../components/ProductEmptyState";
import ProductList from "../components/ProductList";
import ProductPage from "../components/ProductPage";

const Index = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [products, setProducts] = useState([])
  const [productsId, setProductsId] = useState([])

  // 新しい商品が選択された時も最初にチェックボタンをつけておく機能
  useEffect(() => {
    const ids = products.map(product => {
      return {
        id: product.id
      }
    });
    setProductsId(ids)
  }, [products])

  const handleProductSelection = (payload:SelectPayload) => {
    setIsOpen(false);

    setProducts(payload.selection);
  }
  return (
    <>

    <ResourcePicker
      resourceType="Product"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={handleProductSelection}
        initialSelectionIds={productsId}
      />
      {products.length > 0 ? (
        <ProductPage products={products} setIsOpen={setIsOpen}/>
       ) : (
        <ProductEmptyState setIsOpen={setIsOpen} />
      )
      }





      </>
  )
};

export default Index;
