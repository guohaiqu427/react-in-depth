import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";

export default function mountNativeElement(virtualDOM, container, oldDOM){
    // text node vs element node
    let newElement = createDOMElement(virtualDOM)
    if(oldDOM){
        unmountNode(oldDOM)
    }
    container.appendChild (newElement)

    let component = virtualDOM.component 
    if(component){
        component.setDOM(newElement)
    }
}