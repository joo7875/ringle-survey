import React, { Component } from 'react';
import '../css/Question.css';

class Question extends Component {

    state = {
        option: '0'
    }

    onOptionChange = (e) => {
        this.setState({ option: e.target.value });
    }

    render() {
        if (this.state.option === '0')
            console.log(this.state.option);

        return (
            <div className="question-card">

                    <div className='select-div'>
                        <select 
                            className='select'
                            value={this.state.option}
                            onChange={this.onOptionChange}>
                            <option value='0'>Checkbox</option>
                            <option value='1'>Multiple Choice</option>
                            <option value='2'>Short Answer</option>
                        </select>
                    </div>

                    <input type='text' className="header" placeholder='Enter a question' />
                    <input type='text' className="meta" placeholder='Enter a description' />

                    <div style={{ display: this.state.option === '0' ? 'block' : 'none' }}>
                        <input type='radio' />
                        <input type='text' className='input' />
                        <span className='remove-text'>Remove</span>
                        <span className='add-text'>Add</span>
                    </div>

                    <div style={{ display: this.state.option === '1' ? 'block' : 'none' }}>
                        <input type='checkbox' />
                        <input type='text' className='input' />
                        <span className='remove-text'>Remove</span>
                        <span className='add-text'>Add</span>
                    </div>

                    <div style={{ display: this.state.option === '2' ? 'block' : 'none' }}>
                        <textarea className='textarea'></textarea>
                    </div>
                    
            </div>
        );
    }

}

export default Question;