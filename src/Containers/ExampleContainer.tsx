import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useTheme } from '@/Hooks'
import WebView from 'react-native-webview'

const ExampleContainer = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <ScrollView
      contentInsetAdjustmentBehavior={'automatic'}
      style={Layout.fill}
      contentContainerStyle={[Layout.fill, Gutters.smallHPadding]}
    >
      <View style={[Gutters.smallHMargin]}>
        <Text style={Fonts.textLarge}>Plane name</Text>
        <Text style={Fonts.textRegular}>Provided by Irish Life Health</Text>
        <View style={[{ height: 400 }, Gutters.largeVMargin]}>
          <WebView
            automaticallyAdjustContentInsets={false}
            source={{
              uri: 'https://plan1test.tiiny.site/',
            }}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default ExampleContainer
