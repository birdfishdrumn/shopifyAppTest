import React from 'react'
import { EmptyState } from "@shopify/polaris";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductEmptyState:React.VFC<Props> = ({setIsOpen}) => {
  return (
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

export default ProductEmptyState
