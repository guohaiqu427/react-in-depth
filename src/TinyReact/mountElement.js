import mountNativeElement from "./mountNativeElement"
import isFunction from  "./isFunction"
import mountComponent from "./mountComponent"

export default function mountElement(virtualDOM, container){
    if(isFunction(virtualDOM)){
        // component 
        console.log("component")
        mountComponent(virtualDOM, container)
    }else{
        // native
        mountNativeElement(virtualDOM, container)
    }
}