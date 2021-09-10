import React from 'react'
import ResourceSelection from "@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker"
import {
  HideMinor
} from '@shopify/polaris-icons';

import { Thumbnail } from '@shopify/polaris'

interface Props {
  product: any
}


const ProductItem: React.VFC<Props> = ({ product }) => {
  const image = product.images[0] ? product.images[0]?.originalSrc : HideMinor
  return (
    <div>
      <Thumbnail source={image} alt={product.title} />
     {product.title}
    </div>
  )
}

export default ProductItem
