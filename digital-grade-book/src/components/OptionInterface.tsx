import { useState } from 'react'
import ModeCard from './ModeCard'
import writeImage from "../assets/journal-alt.svg"
import displayImage from "../assets/display-code.svg"
import adminImage from "../assets/admin-alt.svg"

function OptionInterface() {
  return (
    <div className='card-holder'>
        <ModeCard title='Add' cardImage={writeImage} bgColor='rgb(130, 255, 108)'></ModeCard>
        <ModeCard title='Display' cardImage={displayImage} bgColor='rgb(255, 112, 112)'></ModeCard>
        <ModeCard title='Admin' cardImage={adminImage} bgColor='rgba(145, 218, 255, 1)'></ModeCard>
    </div>
  )
}

export default OptionInterface