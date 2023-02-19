import createDOMElement from "./createDOMElement"
import mountElement from "./mountElement"
import updateNodeElements from "./updateNodeElement"
import updateTextNode from "./updateTextNode"
import unmountNode from "./unmountNode"
import diffComponent from "./diffComponent"

export default function diff( virtualDOM,container,oldDOM) {
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
    const oldComponent = oldVirtualDOM && oldVirtualDOM.component
    if(!oldDOM){
        // no old DOM! 
        mountElement(virtualDOM, container)
    }
    else if(oldVirtualDOM.type !== virtualDOM.type && typeof virtualDOM.type !== 'function'){
        const newElement = createDOMElement(virtualDOM)
        oldDOM.parentNode.replaceChild(newElement, oldDOM)
    }
    else if(typeof virtualDOM.type === 'function'){
        diffComponent(virtualDOM,oldComponent,oldDOM,container)

    }
    else if(oldVirtualDOM && oldVirtualDOM.type === virtualDOM.type){
        if(virtualDOM.type ==="text"){
            // update text
            updateTextNode(oldVirtualDOM, virtualDOM, oldDOM)
        }
        else{
            // update element
            updateNodeElements(oldDOM,virtualDOM,oldVirtualDOM)
        }
        
        virtualDOM.children.forEach((child, i) => {
            diff(child,oldDOM, oldDOM.childNodes[i])
        });

        let oldchildNodes = oldDOM.childNodes
        if(oldchildNodes.length > virtualDOM.children.length){
            for(let i = oldchildNodes.length-1; i>virtualDOM.children.length-1; i--){
                unmountNode(oldchildNodes[i])
            }
        }
    }
  
}