import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useTheme } from '@/Hooks'
import AutoHeightWebView from 'react-native-autoheight-webview'

const ExampleContainer = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <ScrollView contentInsetAdjustmentBehavior={'automatic'}>
      <View style={[{ flex: 1, overflow: 'scroll' }, Gutters.smallHMargin]}>
        <Text style={Fonts.textLarge}>Plane name</Text>
        <Text style={Fonts.textRegular}>Provided by Irish Life Health</Text>
        <View style={[{ flex: 1 }, Gutters.largeVMargin]}>
          <AutoHeightWebView
            scalesPageToFit={true}
            style={{ flex: 1 }}
            automaticallyAdjustContentInsets={false}
            source={{
              uri: 'https://plan1test.tiiny.site/',
            }}
          />
        </View>
      </View>
      <Text style={[Fonts.textLarge]}>End of View</Text>
    </ScrollView>
  )
}

export default ExampleContainer
