import React, { Component } from 'react';
import '../css/Question.css';

var count = 0;

class Question extends Component {

    state = {
        option: '0',
        id: this.props.id
    }

    onOptionChange = (e) => {
        this.setState({ option: e.target.value });
    }

    onDeleteCard = (id) => {
        document.getElementById('card-' + id).remove();
    }

    onAddRadio = (id) => {
        var radio = document.getElementById('radio-' + id);

        var radio_div = document.createElement('div');
        radio_div.setAttribute('id', 'radio-' + id + '-' + ++count);
        radio_div.setAttribute('class', 'bottom-gap');

        var radio_input = document.createElement('input');
        radio_input.setAttribute('type', 'radio');

        var radio_text = document.createElement('input');
        radio_text.setAttribute('type', 'text');
        radio_text.setAttribute('class', 'input');

        var radio_remove = document.createElement('span');
        radio_remove.setAttribute('id', 'radio-' + id + '-' + count);
        radio_remove.setAttribute('class', 'remove-text');
        radio_remove.innerText = 'Remove';
        radio_remove.onclick = () => this.onRemoveRadio(id, count);


        var radio_add = document.createElement('span');
        radio_add.setAttribute('class', 'add-text');
        radio_add.innerText = 'Add';
        radio_add.onclick = () => this.onAddRadio(id);

        radio_div.appendChild(radio_input);
        radio_div.appendChild(radio_text);
        radio_div.appendChild(radio_remove);
        radio_div.appendChild(radio_add);

        radio.appendChild(radio_div);

    }

    onRemoveRadio = (id, count) => {
        console.log(id + ' ' + count);
    }

    render() {

        var id = this.state.id;

        return (
            <div id={'card-' + id} className="question-card">

                    <div className='select-div'>
                        <select 
                            className='select'
                            value={this.state.option}
                            onChange={this.onOptionChange}>
                            <option value='0'>Single Choice</option>
                            <option value='1'>Multiple Choice</option>
                            <option value='2'>Short Answer</option>
                        </select>
                    </div>

                    <input type='text' className="header" placeholder='Enter a question' />
                    <input type='text' className="meta" placeholder='Enter a description' />

                    <div id={'radio-' + id} style={{ display: this.state.option === '0' ? 'block' : 'none' }}>
                        <div id={'radio-' + id + '-0'} className='bottom-gap'>
                            <input type='radio' />
                            <input type='text' className='input' />
                            <span id={'radio-' + id + '-0'} className='remove-text' onClick={() => this.onRemoveRadio(id)}>Remove</span>
                            <span className='add-text' onClick={() => this.onAddRadio(id, '0')}>Add</span>
                        </div>
                    </div>

                    <div id={'checkbox-' + id} style={{ display: this.state.option === '1' ? 'block' : 'none' }}>
                        <div className='bottom-gap'>
                            <input type='checkbox' />
                            <input type='text' className='input' />
                            <span className='remove-text'>Remove</span>
                            <span className='add-text'>Add</span>
                        </div>
                    </div>

                    <div style={{ display: this.state.option === '2' ? 'block' : 'none' }}>
                        <textarea className='textarea'></textarea>
                    </div>

                    <div className='delete-btn'>
                        <button className="negative ui button" onClick={() => this.onDeleteCard(id)}>Delete</button>
                    </div>
                    
            </div>
        );
    }

}

export default Question;