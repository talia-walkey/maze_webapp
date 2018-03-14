import React, { Component } from 'react';
import './App.css';
import mySocket from 'socket.io-client';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            room:-1,
            chosenFruit:'',
            showFruit:-1,
            allnames:[]
        };
        
        this.handleRoom1 = this.handleRoom1.bind(this);
        this.handleRoom2 = this.handleRoom2.bind(this);
        this.handleRed = this.handleRed.bind(this);
        this.handleYellow = this.handleYellow.bind(this);
        this.handleBlue = this.handleBlue.bind(this);
        this.handleOrange = this.handleOrange.bind(this);
        this.handlePink = this.handlePink.bind(this);
        this.handleGreen = this.handleGreen.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleHost = this.handleHost.bind(this);
        this.handlePlayer = this.handlePlayer.bind(this);
        
        this.hostCherry = this.hostCherry.bind(this);
        this.hostStrawberry = this.hostStrawberry.bind(this);
        this.hostLemon = this.hostLemon.bind(this);
        this.hostBanana = this.hostBanana.bind(this);
        this.hostBlueberry = this.hostBlueberry.bind(this);
        this.hostPlum = this.hostPlum.bind(this);
        this.hostOrange = this.hostOrange.bind(this);
        this.hostCarrot = this.hostCarrot.bind(this);
        this.hostPeach = this.hostPeach.bind(this);
        this.hostGrapefruit = this.hostGrapefruit.bind(this);
        this.hostApple = this.hostApple.bind(this);
        this.hostKiwi = this.hostKiwi.bind(this);
        
        this.handleCherry = this.handleCherry.bind(this);
        this.handleStrawberry = this.handleStrawberry.bind(this);
        this.handleLemon = this.handleLemon.bind(this);
        this.handleBanana = this.handleBanana.bind(this);
        this.handleBlueberry = this.handleBlueberry.bind(this);
        this.handlePlum = this.handlePlum.bind(this);
        this.handleorange = this.handleorange.bind(this);
        this.handleCarrot = this.handleCarrot.bind(this);
        this.handlePeach = this.handlePeach.bind(this);
        this.handleGrapefruit = this.handleGrapefruit.bind(this);
        this.handleApple = this.handleApple.bind(this);
        this.handleKiwi = this.handleKiwi.bind(this);
        
        this.handleName=this.handleName.bind(this);
        this.addName=this.addName.bind(this);
    }
    
    componentDidMount(){
        this.socket= mySocket('http://localhost:10001');
    }
    
    handleRoom1(){
        this.setState({
            room:1
        })
    }
    
    handleRoom2(){
        this.setState({
            room:2
        })
    }
    
    handleRed(){
        this.setState({
            room:3
        })
    }
    
    handleYellow(){
        this.setState({
            room:4
        })
    }
    
    handleBlue(){
        this.setState({
            room:5
        })
    }
    
    handleOrange(){
        this.setState({
            room:6
        })
    }
    
    handlePink(){
        this.setState({
            room:7
        })
    }
    
    handleGreen(){
        this.setState({
            room:8
        })
    }
    
    handleBack(){
        this.setState({
            room:0
        })
    }
    
    handleHost(){
        this.setState({
            room:9
        })
    }
    
    handlePlayer(){
        this.setState({
            room:0
        })
    }
    
    handleName(evt){
        this.setState({
            myname: evt.target.value
        })
        
    }
    
    addName(data){
        this.socket.emit('uname', this.state.myname);
        
        this.socket.on('allnames', (data=>{
            this.setState({
                allnames:data
            })
        }))
        
        console.log(this.state.allnames);
    }
    
    hostCherry(){
        this.setState({
            chosenFruit: './imgs/cherry.png',
            room:0
        })
    }
    
    hostStrawberry(){
        this.setState({
            chosenFruit: './imgs/strawberry.png',
            room:0
        })
    }
    
    hostLemon(){
        this.setState({
            chosenFruit: './imgs/lemon.png',
            room:0
        })
    }
    
    hostBanana(){
        this.setState({
            chosenFruit: './imgs/banana.png',
            room:0
        })
    }
    
    hostBlueberry(){
        this.setState({
            chosenFruit: './imgs/blueberry.png',
            room:0
        })
    }
    
    hostPlum(){
        this.setState({
            chosenFruit: './imgs/plum.png',
            room:0
        })
    }
    
    hostOrange(){
        this.setState({
            chosenFruit: './imgs/orange.png',
            room:0
        })
    }
    
    hostCarrot(){
        this.setState({
            chosenFruit: './imgs/carrot.png',
            room:0
        })
    }
    
    hostPeach(){
        this.setState({
            chosenFruit: './imgs/peach.png',
            room:0
        })
    }
    
    hostGrapefruit(){
        this.setState({
            chosenFruit: './imgs/grapefruit.png',
            room:0
        })
    }
    
    hostApple(){
        this.setState({
            chosenFruit: './imgs/apple.png',
            room:0
        })
    }
    
    hostKiwi(){
        this.setState({
            chosenFruit: './imgs/kiwi.png',
            room:0
        })
    }
    
    handleCherry(){
        this.setState({
            showFruit: 0
        })
    }
    
    handleStrawberry(){
        this.setState({
            showFruit: 1
        })
    }
    
    handleLemon(){
        this.setState({
            showFruit: 2
        })
    }
    
    handleBanana(){
        this.setState({
            showFruit: 3
        })
    }
    
    handleBlueberry(){
        this.setState({
            showFruit: 4
        })
    }
    
    handlePlum(){
        this.setState({
            showFruit: 5
        })
    }
    
    handleorange(){
        this.setState({
            showFruit: 6
        })
    }
    
    handleCarrot(){
        this.setState({
            showFruit: 7
        })
    }
    
    handlePeach(){
        this.setState({
            showFruit: 8
        })
    }
    
    handleGrapefruit(){
        this.setState({
            showFruit: 9
        })
    }
    
    handleApple(){
        this.setState({
            showFruit: 10
        })
    }
    
    handleKiwi(){
        this.setState({
            showFruit: 11
        })
    }
    
  render() {
      var comp = null;
      
      if(this.state.room === -1){
          comp = (
                <div className="App">
                    <button onClick={this.handleHost}>Host</button>
                    <button onClick={this.handlePlayer}>Player</button>
                </div>
          )
      }else if(this.state.room === 0){
          console.log(this.state.chosenFruit);
          comp = (
                <div className="App">
                    <input type='text' placeholder='Enter Your Name' onChange={this.handleName}/>
                    <button onClick={this.addName}>AddName</button>
              
                    {this.state.myname}
              
                    <button onClick={this.handleRoom1}>Room 1</button>
                    <button onClick={this.handleRoom2}>Room 2</button>
                </div>
          )
      }else if (this.state.room === 1){
          comp = (
                <div className="App">
                    <button onClick={this.handleRed}>Red</button>
                    <button onClick={this.handleYellow}>Yellow</button>
                    <button onClick={this.handleBlue}>Blue</button>
                    <button onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 2){
          comp = (
                <div className="App">
                    <button onClick={this.handleOrange}>Orange</button>
                    <button onClick={this.handlePink}>Pink</button>
                    <button onClick={this.handleGreen}>Green</button>
                    <button onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 3){
          comp = (
                <div className="App">
                    <button onClick={this.handleCherry}>Cherry</button>
                    <button onClick={this.handleStrawberry}>Strawberry</button>
                    <button onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 4){
          comp = (
                <div className="App">
                    <button onClick={this.handleLemon}>Lemon</button>
                    <button onClick={this.handleBanana}>Banana</button>
                    <button onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 5){
          comp = (
                <div className="App">
                    <button onClick={this.handleBlueberry}>Blueberry</button>
                    <button onClick={this.handlePlum}>Plum</button>
                    <button onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 6){
          comp = (
                <div className="App">
                    <button onClick={this.handleOrange}>Orange</button>
                    <button onClick={this.handleCarrot}>Carrot</button>
                    <button onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 7){
          comp = (
                <div className="App">
                    <button onClick={this.handlePeach}>Peach</button>
                    <button onClick={this.handleGrapefruit}>Grapefruit</button>
                    <button onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 8){
          comp = (
                <div className="App">
                    <button onClick={this.handleApple}>Apple</button>
                    <button onClick={this.handleKiwi}>Kiwi</button>
                    <button onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 9){
          comp = (
                <div className="App">
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/cherry.png')} onClick={this.hostCherry}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/strawberry.png')} onClick={this.hostStrawberry}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/lemon.png')} onClick={this.hostLemon}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/banana.png')} onClick={this.hostBanana}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/blueberry.png')} onClick={this.hostBlueberry}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/plum.png')} onClick={this.hostPlum}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/orange.png')} onClick={this.hostOrange}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/carrot.png')} onClick={this.hostCarrot}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/peach.png')} onClick={this.hostPeach}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/grapefruit.png')} onClick={this.hostGrapefruit}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/apple.png')} onClick={this.hostApple}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/kiwi.png')} onClick={this.hostKiwi}/>
            
                </div>
          )
      }
      
    if(this.state.chosenFruit === './imgs/cherry.png'){
        if(this.state.showFruit === 0){
            console.log('yes');
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/cherry.png')}/>
            )
        }
    }else if(this.state.chosenFruit === './imgs/strawberry.png'){
        if(this.state.showFruit === 1){
            console.log('yes');
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/strawberry.png')}/>
            )
        }
    }else if(this.state.chosenFruit === './imgs/lemon.png'){
        if(this.state.showFruit === 2){
            console.log('yes');
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/lemon.png')}/>
            )
        }
    }else if(this.state.chosenFruit === './imgs/banana.png'){
        if(this.state.showFruit === 3){
            console.log('yes');
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/banana.png')}/>
            )
        }
    }else if(this.state.chosenFruit === './imgs/blueberry.png'){
        if(this.state.showFruit === 4){
            console.log('yes');
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/blueberry.png')}/>
            )
        }
    }else if(this.state.chosenFruit === './imgs/plum.png'){
        if(this.state.showFruit === 5){
            console.log('yes');
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/plum.png')}/>
            )
        }
    }else if(this.state.chosenFruit === './imgs/orange.png'){
        if(this.state.showFruit === 6){
            console.log('yes');
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/orange.png')}/>
            )
        }
    }else if(this.state.chosenFruit === './imgs/carrot.png'){
        if(this.state.showFruit === 7){
            console.log('yes');
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/carrot.png')}/>
            )
        }
    }else if(this.state.chosenFruit === './imgs/peach.png'){
        if(this.state.showFruit === 8){
            console.log('yes');
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/peach.png')}/>
            )
        }
    }else if(this.state.chosenFruit === './imgs/grapefruit.png'){
        if(this.state.showFruit === 9){
            console.log('yes');
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/grapefruit.png')}/>
            )
        }
    }else if(this.state.chosenFruit === './imgs/apple.png'){
        if(this.state.showFruit === 10){
            console.log('yes');
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/apple.png')}/>
            )
        }
    }else if(this.state.chosenFruit === './imgs/kiwi.png'){
        if(this.state.showFruit === 11){
            console.log('yes');
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/kiwi.png')}/>
            )
        }
    }

    return (
        <div>
            {comp}
        </div>
    );
  }
}

export default App;
