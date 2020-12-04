import React, { Component } from 'react';
import '../css/Question.css';

class Question extends Component {

    constructor(props) {
      super(props);

      this.state =  { 
            radioArr: [''],
            checkboxArr: [''],
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

    onAddClick = (id, index, option) => {
        if (option === '0') {
            document.getElementById('radio-add-' + id + '-' + index).style.display = 'none';
            this.setState(prevState => ({ radioArr: [...prevState.radioArr, '']}));
        }
        else if (option === '1') {
            document.getElementById('checkbox-add-' + id + '-' + index).style.display = 'none';
            this.setState(prevState => ({ checkboxArr: [...prevState.checkboxArr, '']}));
        }
    }

    onRemoveClick (id, index, option){
        if (option === '0') {
            if (this.state.radioArr.length > 1) document.getElementById('radio-add-' + id + '-' + (this.state.radioArr.length - 2)).style.display = 'inline-block';
            else this.onDeleteCard(id);

            let radioArr = [...this.state.radioArr];
            radioArr.splice(index, 1);
            this.setState({ radioArr });
        }
        else if (option === '1') {
            if (this.state.checkboxArr.length > 1) document.getElementById('checkbox-add-' + id + '-' + (this.state.checkboxArr.length - 2)).style.display = 'inline-block';
            else this.onDeleteCard(id);

            let checkboxArr = [...this.state.checkboxArr];
            checkboxArr.splice(index, 1);
            this.setState({ checkboxArr });
        }
    }

    onTextChange (index, option, event) {
        if (option === '0') {
            let radioArr = [...this.state.radioArr];
            radioArr[index] = event.target.value;
            this.setState({ radioArr });
        }
        else if (option === '1') {
            let checkboxArr = [...this.state.checkboxArr];
            checkboxArr[index] = event.target.value;
            this.setState({ checkboxArr });
        }
    }

    onSubmit = (event) => {
        // alert('A name was submitted: ' + this.state.radioArr.join(', '));
        event.preventDefault();
    }
    

    render() {

        var id = this.state.id;
        var radioArr = this.state.radioArr;
        var checkboxArr = this.state.checkboxArr;
        var option = this.state.option;

        return (
            <div id={'card-' + id} className="question-card">

                <div className='select-div'>
                    <select 
                        className='select'
                        value={option}
                        onChange={this.onOptionChange}>
                        <option value='0'>Single Choice</option>
                        <option value='1'>Multiple Choice</option>
                        <option value='2'>Short Answer</option>
                    </select>
                </div>

                <input type='text' className="header" placeholder='Enter a question' />
                <input type='text' className="meta" placeholder='Enter a description' />

                <div id={'radio-' + id} style={{ display: option === '0' ? 'block' : 'none' }}>

                    {radioArr.map((data, index) => 
                        <div key={index} className='bottom-gap'>
                            <input type='radio' />
                            <input type="text" className='input' value={data || ''} onChange={this.onTextChange.bind(this, index, option)} />
                            <span className='remove-text' onClick={this.onRemoveClick.bind(this, id, index, option)}>Remove</span>
                            <span id={'radio-add-' + id + '-' + index} className='add-text' onClick={() => this.onAddClick(id, index, option)}>Add</span>
                        </div>
                    )}

                </div>

                <div id={'checkbox-' + id} style={{ display: option === '1' ? 'block' : 'none' }}>
                    {checkboxArr.map((data, index) => 
                        <div key={index} className='bottom-gap'>
                            <input type='checkbox' />
                            <input type="text" className='input' value={data || ''} onChange={this.onTextChange.bind(this, index, option)} />
                            <span className='remove-text' onClick={this.onRemoveClick.bind(this, id, index, option)}>Remove</span>
                            <span id={'checkbox-add-' + id + '-' + index} className='add-text' onClick={() => this.onAddClick(id, index, option)}>Add</span>
                        </div>
                    )}
                </div>

                <div style={{ display: option === '2' ? 'block' : 'none' }}>
                    <textarea className='textarea'></textarea>
                </div>

                <div className='delete-btn'>
                    <button className="negative ui button" onClick={() => this.onDeleteCard(id)}>Delete</button>
                </div>

                <div className='container submit-div'>
                    <button className="ui button submit-btn" onClick={this.onSubmit}>Submit</button>
                </div>
                    
            </div>
        );
    }
  }
  
export default Question;