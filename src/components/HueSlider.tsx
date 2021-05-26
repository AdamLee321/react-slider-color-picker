/** @jsx jsx */
import { jsx } from '@emotion/react'
import { ReactElement, FC } from 'react'
import Slider from './Slider'

// interfaces
import { ReactSliderColorPickerProps } from '../interfaces'

export const HueSlider: FC<ReactSliderColorPickerProps> = (
  props
): ReactElement => {
  return (
    <Slider
      disabled={props.disabled}
      thumbBackground={`hsl(${props.color.h}, 100%, 50%)`}
      trackBackground='linear-gradient(to right, rgb(255, 0, 0),rgb(255, 255, 0),rgb(0, 255, 0),rgb(0, 255, 255),rgb(0, 0, 255),rgb(255, 0, 255),rgb(255, 0, 0))'
      handleChange={props.handleChange}
    />
  )
}
