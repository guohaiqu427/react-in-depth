export default function unmountNode(node) {
    //1. unmount text node 
    const virtualDOM = node._virtualDOM
    if(virtualDOM.type === "text"){
        node.remove()
        return 
    }
    // 2. unmount component 
    // 2a. hook: component will unmount
    let component = virtualDOM.component
   if(component) {
    component.componentWillUnmount()
   }
   //3. remove ref 
   if(virtualDOM.props && virtualDOM.props.ref){
        virtualDOM.props.ref(null)
   }
   //4. remove eventlistenr
   Object.keys(virtualDOM.props).forEach(propName => {
    if(propName.slice(0,2) === "on"){
        const eventName = propName.toLocaleLowerCase().slice(2)
        const eventHandler = virtualDOM.props[propName]
        node.removeEventListener(eventName, eventHandler)
    }
   })
   //5. remove child nodes
   if(node.childNodes.length > 0){
    for(let i=0; i<node.childNodes.length; i++){
        unmountNode(node.childNodes[i])
        i--
    }
   }
   node.remove()
}