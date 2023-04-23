import React from 'react'
  
const ProgressBar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '250px',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 5
      }
      
      const Childdiv = {
        height: '100%',
        width: `${(progress/255)*100}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }

    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
      </div>
    </div>
    )
}
  
export default ProgressBar;