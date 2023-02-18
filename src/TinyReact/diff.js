import mountElement from "./mountElement"
import updateNodeElements from "./updateNodeElement"
import updateTextNode from "./updateTextNode"
export default function diff( virtualDOM,container,oldDOM) {
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
    if(!oldDOM){
        // no old DOM! 
        mountElement(virtualDOM, container)
    }else if(oldVirtualDOM && oldVirtualDOM.type === virtualDOM.type){
        if(virtualDOM.type ==="text"){
            // update text
            updateTextNode(oldVirtualDOM, virtualDOM, oldDOM)
        }else{
            // update element
            updateNodeElements(oldDOM,virtualDOM,oldVirtualDOM)
        }
        virtualDOM.children.forEach((child, i) => {
            diff(child,oldDOM, oldDOM.childNodes[i])
            
        });
    }
  
}