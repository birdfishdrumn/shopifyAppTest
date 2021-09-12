import { Layout, Page, SettingToggle, TextStyle } from '@shopify/polaris'
import React, { useState,useEffect } from 'react'
import { useAxios  } from "hooks/useAxios";
const install = () => {
  const [axios] = useAxios()
  const [isInstalled, setIsInstalled] = useState(null)
  const [scriptTagId, setScriptTagId] = useState()
  const titleDescription = isInstalled ? "Uninstall" : "Install"
  const bodyDescription = isInstalled ? "installed" : "uninstalled"
  console.log(process.env.HOST)
  // scriptタグを取得する処理
 const baseUrl = "https://f901-60-74-195-202.ngrok.io"

    const fetchScriptTags = async() => {
      const { data } = await axios.get(`${baseUrl}/script_tag/all`)
      console.log(data)
      setIsInstalled(data.installed)
      if (data.details > 0) {
        setScriptTagId(data.details[0].id)
      }
    }


  useEffect(() => {
  fetchScriptTags()

  }, [isInstalled])

  async function handleAction() {
    if (!isInstalled) {
      axios.post(`${baseUrl}/script_tag`)
    } else {
      axios.delete(`${baseUrl}/script_tag/?id=${scriptTagId}`)
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
