import mountNativeElement from "./mountNativeElement"
import isFunction from  "./isFunction"
import mountComponent from "./mountComponent"

export default function mountElement(virtualDOM, container,oldDOM){
    if(isFunction(virtualDOM)){
        // component 
        console.log("component")
        mountComponent(virtualDOM, container,oldDOM)
    }else{
        // native
        mountNativeElement(virtualDOM, container,oldDOM)
    }
}