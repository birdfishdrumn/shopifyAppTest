import React from 'react'
import { EmptyState, Heading, Page } from "@shopify/polaris";
import ProductList from "./ProductList";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  products:any[]
}

const ProductPage:React.VFC<Props> = ({products,setIsOpen}) => {
  return (
    <Page
          title="Product Selector"
          primaryAction={{
            content: "Select product",
            onAction: () => setIsOpen(true),

          }}
        >
               <ProductList products={products}/>
        </Page>
  )
}

export default ProductPage
