export default function updateTextNode(oldVirtualDOM, virtualDOM, oldDOM) {
    if(oldVirtualDOM.props.textContent !== virtualDOM.props.textContent){
        oldDOM.textContent = virtualDOM.props.textContent
        oldDOM._virtualDOM = virtualDOM
    }
}