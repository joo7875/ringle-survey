import React from 'react';
import '../css/App.css';
import plus from '../css/icon/plus.svg';
import Question from './Question';


class App extends React.Component {

    state = {
        count: [0],
    }

    onAddCardClick = () => {
        this.setState({
            count: [...this.state.count, this.state.count.length],
            submit: null
          })
    }

    render() {

        console.log(this.state.count);

        return (
            <div>
                <div className='logo'><span className='logo-text'>Ringle Survey</span></div>

                <div className='container'>
                    <div className='card'>
                        <input type='text' placeholder='Enter a title of survey' className='card-title-input'></input>
                        <input type='text' placeholder='Enter a description of survey' className='card-desc-input'></input>
                    </div>

                    {this.state.count.map((data, index) => 
                        <Question key={index} id={index} />
                    )}
                    
                </div>

                <div className='icon-div'><img src={plus} className='plus-icon' onClick={this.onAddCardClick} alt='Add Question' /></div>

                

            </div>
        );
    }
}


export default App;

// Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>