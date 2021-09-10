import { ResourcePicker} from "@shopify/app-bridge-react";
import { SelectPayload, } from "@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker";
import { Heading, Page } from "@shopify/polaris";
import {useState} from "react"
import ProductList from "../components/ProductList";

const Index = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [products, setProducts] = useState<any[]>([])
  const handleProductSelection = (payload:SelectPayload) => {
    setIsOpen(false);
    setProducts(payload.selection);
  }
  return (
  <Page
    title="Product Selector"
    primaryAction={{
      content: "Select product",
      onAction: () => setIsOpen(true),

    }}
  >

    <ResourcePicker
      resourceType="Product"
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={handleProductSelection}
      />
      <ProductList products={products}/>

    </Page>
  )
};

export default Index;
