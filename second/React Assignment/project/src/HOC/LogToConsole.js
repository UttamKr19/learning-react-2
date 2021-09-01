import React,{Component} from 'react'

export default function LogToConsole(FeatureComponent,label,logMount,logRender,logUnmount) {
    return class extends Component{
        componentDidMount(){
            if(logMount){
                console.log(`${label} : Mount`)
            }
        }

        componentWillMount(){
            if(logUnmount){
                console.log(`${label} : Unmount`)
            }
        }

        render(){
            if(logRender){
                console.log(`${label} : Render`)
            }

            return <FeatureComponent {...this.props}/>
        }
    }
}
