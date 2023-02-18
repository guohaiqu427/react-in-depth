import mountElement from "./mountElement";
import updateNodeElements from "./updateNodeElement";

export default function createDOMElement(virtualDOM){
        let newElement = null
        if(virtualDOM.type === "text") {
            newElement = document.createTextNode(virtualDOM.props.textContent)
        }else{
            newElement = document.createElement(virtualDOM.type)
        }
        newElement._virtualDOM = virtualDOM
        virtualDOM.children.forEach(child => {
            mountElement(child, newElement)
            updateNodeElements(newElement, virtualDOM)

        });

        return newElement
}