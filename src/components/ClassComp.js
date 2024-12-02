
class App extends React.Component{
    constructor(props){
      super(props)
      this.state={
        data:"1"
      }
      console.log("P-const")
    }
  
     componentDidMount(){
      this.timerId = setInterval(()=>{
        console.log(test)
      },1000)
      this.setState({
          data :"10"
      })
      console.log("P-mount")
    }

    componentDidUpdate(prevState,preProps){
      if(prevState.count!==this.state.count){
        // perform the operation
      }
    }

    componentWillUnmount(){
      clearInterval(this.timerId)
    }

    render(){
     const {data} = this.state; 
     console.log("P-render")

      return (
        <ChildComp/>
      )
    }
  }

  class ChildComp extends React.Component{
    constructor(props){
        super(props)
        console.log("C-const")
    }

    componentDidMount(){
        console.log("C-mount")
      }
  
      render(){
       console.log("C-render")
  
        return (
          <div/>
        )
      }
  }