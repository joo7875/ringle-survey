import React from 'react';
import '../css/App.css';
import plus from '../css/icon/plus.svg';
import Question from './Question';


class App extends React.Component {


    render() {
        return (
            <div>
                <div className='logo'><span className='logo-text'>Ringle Survey</span></div>

                <div className='container'>
                    <div className='card'>
                        <div className='card-title'>Start the survey</div>
                        <div>Start the survey</div>
                    </div>

                    <Question />
                    
                </div>

                <div className='icon-div'><img src={plus} className='plus-icon' alt='Add Question' /></div>

            </div>
        );
    }
}


export default App;

// Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>