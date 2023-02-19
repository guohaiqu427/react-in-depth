import TinyReact from "./TinyReact"

let container = document.getElementById("root")

// start : test native element 
// const virtualDOM = (
//     <div className="container">
//       <h1>你好 Tiny React</h1>
//       <h2 data-test="test">(编码必杀技)</h2>
//       <div>
//         嵌套1 <div>嵌套 1.1</div>
//       </div>
//       <h3>(观察: 这个将会被改变)</h3>
//       {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//       {2 == 2 && <div>2</div>}
//       <span>这是一段内容</span>
//       <button onClick={() => alert("你好")}>点击我</button>
//       <h3>这个将会被删除</h3>
//       2, 3
//       <input type="text" value="13" />
//     </div>
//   )
//   TinyReact.render(virtualDOM, container)
// end: test native element 

// start: test function component 
  // function Demo() {
  //   return <div>&hearts;</div>
  // }
  // function Heart(props) {
  //   return <div>{ props.title} <Demo /></div>
  // }
  // TinyReact.render(<Heart title="1"/>, container)
// end: test function component 


// start: test class component 
// class Alert extends TinyReact.Component{
//   constructor(props){
//     super(props)
//   }
//   render() {
//     return <div>{this.props.name}, {this.props.age}</div>
//   }
// }
// TinyReact.render(<Alert name="john" age={2}/>, container)

// end: test class component 


// start: test modifyDOM 
// const virtualDOM = (
//     <div className="container">
//       <h1>你好 Tiny React</h1>
//       <p>will be deleted</p>
//       <h2 data-test="test">(编码必杀技)</h2>
//       <div>
//         嵌套1 <div>嵌套 1.1</div>
//       </div>
//       <h3>(观察: 这个将会被改变)</h3>
//       {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//       {2 == 2 && <div>2</div>}
//       <span>这是一段内容</span>
//       <button onClick={() => alert("你好")}>点击我</button>
//       <h3>这个将会被删除</h3>
//       2, 3
//       <input type="text" value="13" />
//     </div>
//   )
//   const modifyDOM = (
//     <div className="container">
//       <h1>你好 Tiny React</h1>
//       <h2 data-test="test1">(编码必杀技)</h2>
//       <div>
//         嵌套1 <div>嵌套 1.1</div>
//       </div>
//       <h3>(观察: 这个将会被改变)</h3>
//       {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
//       {2 == 2 && <div>2</div>}
//       <span>这是edited一段内容</span>
//       <button onClick={() => alert("hello")}>点击我</button>
//       <h6>这个将会被删除&replaced with new one</h6>
//       <input type="text" value="13" />
//     </div>
//   )
//   TinyReact.render(virtualDOM, container)
//   setTimeout(()=>{
//     TinyReact.render(modifyDOM,container)
//   },2000)
// end: test modifyDOM 



// start： test setState 
// class Alert extends TinyReact.Component {
//   constructor(props){
//     super(props)
//   }
//   componentWillReceiveProps(nextProps){
//     console.log("componentWillReceiveProps")
//   }
//   componentWillUpdate(nextProps){
//     console.log("componentWillUpdate")
//   }
//   componentDidUpdate(prevProps){
//     console.log("componentDidUpdate")
//   }

//   render(){
//     return (
//       <div>
//         {this.props.name}
//       </div>
//     )
//   }
// }

// TinyReact.render(<Alert name="john"/>, container)

// setTimeout(()=>{
//   TinyReact.render(<Alert name="john" />, container)},2000)
// end: test setState


// start: test ref 
// class Alert extends TinyReact.Component {
//   constructor(props){
//     super(props)
//   }
//   componentDidMount(){
//     console.log("component did mount")
//   }
//   render(){
//     return (
//       <div>
//         {this.props.name}
//       </div>
//     )
//   }
// }
// class DemoRef extends TinyReact.Component {
//   constructor(props){
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(){
//     console.log(this.input.value)
//     console.log(this.alert)
//   }
//   render(){
//     return (
//       <div>
//         <input type="text" ref = {input=> {this.input = input}}></input>
//         <Alert ref={alert=> this.alert = alert} name="joe"/>
//         <button onClick={this.handleClick}>click</button>
//       </div>
//     )
//   }
// }
// TinyReact.render(<DemoRef/>, container)
// end: test ref



class KeyDemo extends TinyReact.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          id: 1,
          name: "张三"
        },
        {
          id: 2,
          name: "李四"
        },
        {
          id: 3,
          name: "王五"
        },
        {
          id: 4,
          name: "赵六"
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const newState = JSON.parse(JSON.stringify(this.state))
    // newState.persons.push(newState.persons.shift())
    newState.persons.splice(1, 0, { id: 100, name: "李逵" })
    // newState.persons.pop()
    this.setState(newState)
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.persons.map(person => (
            <li key={person.id}>
              {person.name}
            </li>
          ))}
        </ul>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}

TinyReact.render(<KeyDemo />, root)
