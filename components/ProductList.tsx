import { Card, ResourceList } from '@shopify/polaris'
import React from 'react'
import ProductItem from './ProductItem'
import ResourceSelection from "@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker"

interface Props {
  products:any[]
}

const ProductList:React.VFC<Props> = ({products}) => {
  return (
    <Card>
      <ResourceList
        showHeader
        resourceName={{ singular: "Product", plural: "Products" }}
        items={products}
        renderItem={product => <ProductItem product={product}/>}
      />
    </Card>
  )
}

export default ProductList
