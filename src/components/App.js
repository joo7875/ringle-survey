import React from 'react';
import '../css/App.css';
import plus from '../css/icon/plus.svg';
import Question from './Question';


class App extends React.Component {

    state = {
        count: [],
    }

    onAddClick = () => {
        this.setState({
            count: [...this.state.count, <Question key={this.state.count.length + 1} id={this.state.count.length + 1} />]
          })
    }

    render() {

        return (
            <div>
                <div className='logo'><span className='logo-text'>Ringle Survey</span></div>

                <div id='container'>
                    <div className='card'>
                        <input type='text' placeholder='Enter a title of survey' className='card-title-input'></input>
                        <input type='text' placeholder='Enter a description of survey' className='card-desc-input'></input>
                    </div>

                    <Question id={0} />

                    {this.state.count}
                    
                </div>

                <div className='icon-div'><img src={plus} className='plus-icon' onClick={this.onAddClick} alt='Add Question' /></div>

            </div>
        );
    }
}


export default App;

// Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>