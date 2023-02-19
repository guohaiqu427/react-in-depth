import mountElement from "./mountElement"
export default function diffComponent(virtualDOM,oldComponent,oldDOM,container){
    if(isSameComponent(virtualDOM,oldComponent)){
        // same component 
        console.log("same")
    }else {
        // different component
        console.log("different")
        
        mountElement(virtualDOM, container,oldDOM)
    }
}

function isSameComponent(virtualDOM, oldComponent){
    return oldComponent && virtualDOM.type ===oldComponent.constructor

}