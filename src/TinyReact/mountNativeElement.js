import mountElement from "./mountElement";

export default function mountNativeElement(virtualDOM, container){
    // text node vs element node
    let newElement = null
    if(virtualDOM.type === "text") {
        newElement = document.createTextNode(virtualDOM.props.textContent)
    }else{
        newElement = document.createElement(virtualDOM.type)
    }

    virtualDOM.children.forEach(child => {
        mountElement(child, newElement)
    });

    container.appendChild (newElement)
}