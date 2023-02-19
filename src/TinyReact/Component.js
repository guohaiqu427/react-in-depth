import diff from "./diff"
export default class Component{
    constructor(props){
        this.props = props
    }
    setState (state){
        this.state  = Object.assign ({}, this.state, state)
        let virtualDOM = this.render()
        let oldDOM = this.getDOM()
        diff(virtualDOM, oldDOM.parentNode, oldDOM)
    }

    setDOM(dom){
        this._dom = dom
    }
    getDOM(){
        return this._dom
    }
    updateProps(props){
        this.props = props
    }
}