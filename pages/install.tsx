import { Layout, Page, SettingToggle, TextStyle } from '@shopify/polaris'
import React, { useState } from 'react'
import { useAxios  } from "hooks/useAxios";
const install = () => {
  const [axios] = useAxios()
  const [isInstalled, setIsInstalled] = useState(null)
  const titleDescription = isInstalled ? "Uninstall" : "Install"
  const bodyDescription = isInstalled ? "installed" : "uninstalled"
  console.log(process.env.HOST)
  // scriptタグを取得する処理
  async function handleAction() {
    if (!isInstalled) {
      axios.post(`https://f901-60-74-195-202.ngrok.io/script_tag`)
    }
     setIsInstalled(prevState => !prevState)
  }
  return (
    <Page>
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
