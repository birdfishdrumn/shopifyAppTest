import { Heading, Page } from "@shopify/polaris";

const Index = () => (
  <Page title="Product Selector"
    primaryAction={{
      content: "Select product",
      onAction: () => console.log("clicked")
  }}
  >
    <Heading>shopifyアプリの開発を始めよう！ 🎉</Heading>
  </Page>
);

export default Index;
