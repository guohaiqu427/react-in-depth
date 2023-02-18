import mountElement from "./mountElement"

export default function diff( virtualDOM,container,oldDOM) {
    if(!oldDOM){
        // no old DOM! 
        mountElement(virtualDOM, container)
    }
}