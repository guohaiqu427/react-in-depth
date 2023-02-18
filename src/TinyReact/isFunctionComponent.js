import isFunction from "./isFunction"

export default function isFunctionComponent(virtualDOM) {
    const type = virtualDOM.type
    return type && isFunction && !(type.prototype && type.prototype.render)
}