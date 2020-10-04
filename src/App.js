import React from 'react'
import axios from 'axios'
import Footers from './Footer'
import './App.css'

class App extends React.Component {
    state = { advice: '' }

    componentDidMount() {        
        this.fetchAdvice()
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const {advice} = response.data.slip ;
            this.setState({ advice: advice});
        })
        .catch((error) => {
            console.log(error); 
        });
    }

    render() {
        const { advice } = this.state ;
        return (
                        
            <div className="App">
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <nav className="navbar-brand" >ADVICE FOR THE DAY</nav>
                  </nav>
                  <div className="container">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text">
                          Life can be difficult. Here are some amazing life advices to help you get through this journey!
                        </p>
                        <br></br>
                        <h5 className="card-title">Enjoy your life!</h5>
                        <br></br>
                        <button className="btn btn-secondary btn-lg btn-block" onClick={this.fetchAdvice}>
                        Unlock today's advice</button>
                      </div>
                    </div>
                  </div>
                  <br></br><br></br>
                  <h3 className="advices">{advice}</h3>
                  <br></br><br></br>
                  <div class="card-footer text-muted">
                     <Footers/>
                  </div>
             </div>

        );
    }
}

export default App