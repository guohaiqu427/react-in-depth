import diff from "./diff"
export default function updateComponent (virtualDOM,oldComponent,oldDOM,container) {
    oldComponent.componentWillReceiveProps(virtualDOM.props)
    let prevProps = oldComponent.props
    if(oldComponent.shouldComponentUpdate(virtualDOM.props)){
        console.log("show")
        oldComponent.componentWillUpdate(virtualDOM.props)
        //1. update props
        oldComponent.updateProps(virtualDOM.props)
        let nextVirtualDOM = oldComponent.render()
        nextVirtualDOM.component = oldComponent
        diff(nextVirtualDOM, container, oldDOM)
        oldComponent.componentDidUpdate(prevProps)
    }
}
    
