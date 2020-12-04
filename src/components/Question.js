import React, { Component } from 'react';
import '../css/Question.css';

class Question extends Component {

    constructor(props) {
      super(props);

      this.state =  { 
            radioArr: [''],
            option: '0',
            id: this.props.id
         };
    }

    onOptionChange = (e) => {
        this.setState({ option: e.target.value });
    }

    onDeleteCard = (id) => {
        document.getElementById('card-' + id).remove();
    }

    onAddRadio = (id, index) => {
        document.getElementById('radio-add-' + id + '-' + index).style.display = 'none';
        this.setState(prevState => ({ radioArr: [...prevState.radioArr, '']}))
    }

    onRemoveRadio (id, index){
        if (this.state.radioArr.length > 1)
            document.getElementById('radio-add-' + id + '-' + (this.state.radioArr.length - 2)).style.display = 'inline-block';
        else 
            this.onDeleteCard(id);

        let radioArr = [...this.state.radioArr];
        radioArr.splice(index, 1);
        this.setState({ radioArr });
    }

    handleChange (i, event) {
        let radioArr = [...this.state.radioArr];
        radioArr[i] = event.target.value;
        this.setState({ radioArr });
    }
    

    render() {

        var id = this.state.id;
        var radioArr = this.state.radioArr;

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

                    {radioArr.map((data, index) => 
                        <div key={index} className='bottom-gap'>
                            <input type='radio' />
                            <input type="text" className='input' value={data || ''} onChange={this.handleChange.bind(this, index)} />
                            <span className='remove-text' onClick={this.onRemoveRadio.bind(this, id, index)}>Remove</span>
                            <span id={'radio-add-' + id + '-' + index} className='add-text' onClick={() => this.onAddRadio(id, index)}>Add</span>
                        </div>    
                    )}

                </div>

                <div id={'checkbox-' + id} style={{ display: this.state.option === '1' ? 'block' : 'none' }}>
                    {radioArr.map((data, index) => 
                        <div className='bottom-gap'>
                            <input type='checkbox' />
                            <input type='text' className='input' />
                            <span className='remove-text'>Remove</span>
                            <span className='add-text'>Add</span>
                        </div>
                    )}
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