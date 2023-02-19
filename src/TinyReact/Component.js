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
    
  componentWillMount() {
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {console.log("componentWillReceiveProps")}
  shouldComponentUpdate(nextProps, nextState) {
    // it is always true if re-assign value. becasue nextProps and this.props has a stores in differnt memory 
    console.log(nextProps != this.props || nextState != this.state, nextProps, this.props)
    return nextProps != this.props || nextState != this.state
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate")
  }
  componentDidUpdate(prevProps, preState) {
    console.log("componentDidUpdate")
  }
  componentWillUnmount() {}
}