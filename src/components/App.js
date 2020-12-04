import React from 'react';
import '../css/App.css';
import plus from '../css/icon/plus.svg';
import Question from './Question';


class App extends React.Component {

    state = {
        count: [0],
        title: '',
        desc: ''
    }

    onAddCardClick = () => {
        this.setState({
            count: [...this.state.count, this.state.count.length],
            submit: null
          })
    }

    onTitleChange = (e) => {
        this.setState({ title: e.target.value });
    }

    onDescChange = (e) => {
        this.setState({ desc: e.target.value });
    }

    render() {

        sessionStorage.setItem('survey-title', this.state.title);
        sessionStorage.setItem('survey-desc', this.state.desc);

        return (
            <div>
                <div className='logo'><span className='logo-text'>Ringle Survey</span></div>

                <div className='container'>
                    <div className='card'>
                        <input type='text' placeholder='Enter a title of survey' className='card-title-input' onChange={this.onTitleChange} />
                        <input type='text' placeholder='Enter a description of survey' className='card-desc-input' onChange={this.onDescChange} />
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