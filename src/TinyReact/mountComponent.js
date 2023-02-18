import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";
export default function mountComponent(virtualDOM, container) {
    let nextVirtualDOM = null;

    if(isFunctionComponent(virtualDOM)){
        // function component     
        nextVirtualDOM = extract(virtualDOM)
    }else{
    // class component 
    }

    mountNativeElement(nextVirtualDOM, container)

} 

function extract (virtualDOM){
    return virtualDOM.type()
}