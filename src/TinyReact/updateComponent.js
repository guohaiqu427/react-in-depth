import diff from "./diff"
export default function updateComponent (virtualDOM,oldComponent,oldDOM,container) {
    //1. update props
    oldComponent.updateProps(virtualDOM.props)
    let nextVirtualDOM = oldComponent.render()
    nextVirtualDOM.component = oldComponent
    diff(nextVirtualDOM, container, oldDOM)
}