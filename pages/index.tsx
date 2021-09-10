import { ResourcePicker} from "@shopify/app-bridge-react";
import { SelectPayload } from "@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker";
import {useState,useEffect} from "react"
import ProductEmptyState from "../components/ProductEmptyState";
import ProductList from "../components/ProductList";
import ProductPage from "../components/ProductPage";
import store from "store-js";

const Index = ({host}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [products, setProducts] = useState([])
  const [productsId, setProductsId] = useState([])

  // 新しい商品が選択された時も最初にチェックボタンをつけておく機能
  useEffect(() => {
    const productList = store.get(`${host}-products`)
    if (productList) {
          setProducts(productList)
    }

  }, []);

  useEffect(() => {
    console.log(host)
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
    store.set(`${host}-products`,payload.selection)
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
