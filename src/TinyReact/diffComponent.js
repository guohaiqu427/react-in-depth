import mountElement from "./mountElement"
import updateComponent from "./updateComponent"
export default function diffComponent(virtualDOM,oldComponent,oldDOM,container){
    if(isSameComponent(virtualDOM,oldComponent)){
        // same component 
        updateComponent(virtualDOM,oldComponent,oldDOM,container)
    }else {
        // different component
        mountElement(virtualDOM, container,oldDOM)
    }
}

function isSameComponent(virtualDOM, oldComponent){
    return oldComponent && virtualDOM.type ===oldComponent.constructor

}