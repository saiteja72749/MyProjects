import React from 'react'

const HocCounter = (WrappedComponent,incrementNumber) => {
    class HocCounter extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          increment=()=>{
              this.setState(prevState=>{
                  return {count: prevState.count+incrementNumber}
              })
              console.log('hovered')
          }
        render(){
            console.log(this.props.name)
            return <WrappedComponent 
            name={'sst1'} 
            count={this.state.count} 
            increment={this.increment}
            {...this.props}
            />
        }
    }
    return HocCounter
}
export default HocCounter