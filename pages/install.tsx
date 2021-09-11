import { Layout, Page, SettingToggle, TextStyle } from '@shopify/polaris'
import React, { useState } from 'react'
import axios from "axios"
import { useAppBridge } from "@shopify/app-bridge-react";
import { getSessionToken } from "@shopify/app-bridge-utils";
const install = () => {
  const app =useAppBridge()
  const [isInstalled, setIsInstalled] = useState(null)
  const titleDescription = isInstalled ? "Uninstall" : "Install"
  const bodyDescription = isInstalled ?  "installed" : "uninstalled"
  async function handleAction() {
    if (!isInstalled) {
      const token = await getSessionToken(app)
      const config = {
         headers: {Authorization: `Bearer ${token}`}
      }
      axios.post(`${ process.env.HOST}/script_tag`,{},config)
    }
     setIsInstalled(prevState => !prevState)
  }
  return (
    <Page>c vhbh gg
      <Layout.AnnotatedSection
        title={`${titleDescription} banner`}
        description="Toggle banner installation on your shop"
      >
        <SettingToggle
          action={{
            content: titleDescription,
            onAction: handleAction

          }}
          enabled={true}
        >
          The banner script is <TextStyle variation="strong">
            {bodyDescription}
          </TextStyle>
        </SettingToggle>
      </Layout.AnnotatedSection>

    </Page>
  )
}

export default install
