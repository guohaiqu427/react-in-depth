import createDOMElement from "./createDOMElement";

export default function mountNativeElement(virtualDOM, container){
    // text node vs element node
    let newElement = createDOMElement(virtualDOM)
    container.appendChild (newElement)

    let component = virtualDOM.component 
    if(component){
        component.setDOM(newElement)
    }
}