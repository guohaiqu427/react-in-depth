import isFunctionComponent from "./isFunctionComponent";
export default function mountComponent(virtualDOM, container) {
    if(isFunctionComponent(virtualDOM)){
    // function component 
    console.log( 'function component')
    }else{
    // class component 
    }
} 