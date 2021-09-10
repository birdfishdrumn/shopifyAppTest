import { ResourcePicker} from "@shopify/app-bridge-react";
import { SelectPayload } from "@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker";

import { EmptyState, Heading, Page } from "@shopify/polaris";
import {useState} from "react"
import ProductList from "../components/ProductList";

const Index = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [products, setProducts] = useState([])

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
      />
      {products.length > 0 ? (

        <Page
          title="Product Selector"
          primaryAction={{
            content: "Select product",
            onAction: () => setIsOpen(true),

          }}
        ></Page>) : (
        <EmptyState
          heading="商品を管理します"
          action={{
            content: "商品を選択してください。",
            onAction: () => setIsOpen(true),

          }}
          image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
        >
          <p>バナーにする商品を選択して下さい。</p>
        </EmptyState>
      )
      }


      <ProductList products={products}/>


      </>
  )
};

export default Index;
