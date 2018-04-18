import React from 'react'
import { WebView } from 'react-native'

const UXView = ({
  uri,
  cfg,
}) => (<WebView source={{uri}} {...cfg} />)

export default UXView
