import React from 'react'

import {
  HideMinor
} from '@shopify/polaris-icons';

import { Thumbnail,ResourceList,Stack,TextStyle} from '@shopify/polaris'

interface Props {
  product: any
}


const ProductItem: React.VFC<Props> = ({ product }) => {
  const image = product.images[0] ? product.images[0]?.originalSrc : HideMinor
  const media = <Thumbnail source={image} alt={product.title} />
  const price= product.variants[0].price
  return (
    // @ts-ignore
    <ResourceList.Item
      id= {product.id}
      media={media}
      accessibilityLabel={`${product.title}の詳細を見る`}
    >
      <Stack>
         <h4>
        <Stack.Item fill >
          <TextStyle variation="strong">
         {product.title}</TextStyle>
        </Stack.Item>
        </h4>
        <Stack.Item>
          <p>${price}</p>
        </Stack.Item>
      </Stack>
    </ResourceList.Item>
  )
}

export default ProductItem
