import React from 'react'
import SVGFallback from '../../../Utils/components/SVGFallback'
import Savings from './Saving'
import dimensionConstants from '../../../constantConfig'

export default function WelcomeImage() {
  return (
    <SVGFallback>
        <Savings width={dimensionConstants.welcomeImage.width} height={dimensionConstants.welcomeImage.height}/>
    </SVGFallback>
  )
}