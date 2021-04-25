import React, { Component } from 'react';
import '../css/Question.css';

class Question extends Component {

    constructor(props) {
      super(props); // 생성자. props를 설정하기 위한 초기값

      // bind
        // this를 가르키는 context를 변경하여 바로 실행시켜주는 메소드
        // 메소드의 재사용과 공유 그리고 중복을 방지

        // 콜백으로 함수를 만들 때 기본적으로는 함수 안에서 this 를 사용하지 못한다.
        // 이때 this를 사용하고 싶다면 함수 끝에 .bind를 사용하여 this 를 넘기면 사용할 수 있다.

      this.state =  { 
            selectArr: [''],
            option: '0',
            id: this.props.id
         };
    }


    onOptionChange = (e) => {
        this.setState({ option: e.target.value });
    }

    onDeleteCard = (id) => {
        document.getElementById('card-' + id).remove();
        sessionStorage.removeItem('title-' + id);
        sessionStorage.removeItem('desc-' + id);
        sessionStorage.removeItem('select-' + id);
        sessionStorage.removeItem('select-text-' + id);
    }

    onAddClick = (id, index) => {
        document.getElementById('select-add-' + id + '-' + index).style.display = 'none';
        this.setState(prevState => ({ selectArr: [...prevState.selectArr, '']}));
    }

    onRemoveClick (id, index){
        if (this.state.selectArr.length > 1) document.getElementById('select-add-' + id + '-' + (this.state.selectArr.length - 2)).style.display = 'inline-block';
        else this.onDeleteCard(id);

        let selectArr = [...this.state.selectArr];
        selectArr.splice(index, 1);
        this.setState({ selectArr });

        sessionStorage.setItem('select-' + id, selectArr);
    }

    onTextChange (id, option, index, event) {

        if (option !== '2') {
            let selectArr = [...this.state.selectArr];
            selectArr[index] = event.target.value;
            this.setState({ selectArr });

            sessionStorage.setItem('select-' + id, selectArr);
        }
        else {
            sessionStorage.setItem('select-text-' + id, event.target.value);
        }
    }

    onSubmit = (event) => {
        
        console.log('--------------------- Ringle Survey ----------------------');
        console.log('Survey title: ' + sessionStorage.getItem('survey-title'));
        console.log('Survey description: ' + sessionStorage.getItem('survey-desc'));
        console.log('----------------------------------------------------------');

        for (var i = 0; i <= this.state.id; i++) {

            if (sessionStorage.getItem('title-' + i) !== null) console.log('Question title: ' + sessionStorage.getItem('title-' + i));
            if (sessionStorage.getItem('desc-' + i) !== null) console.log('Question description: ' + sessionStorage.getItem('desc-' + i));
            if (sessionStorage.getItem('select-' + i) !== null) console.log(sessionStorage.getItem('select-' + i));
            if (sessionStorage.getItem('select-text-' + i) !== null) console.log(sessionStorage.getItem('select-text-' + i));

            if (sessionStorage.getItem('title-' + i) !== null || sessionStorage.getItem('desc-' + i) !== null || sessionStorage.getItem('select-' + i) !== null || sessionStorage.getItem('select-text-' + i) !== null) console.log('');
        }
        

        event.preventDefault(); // 현재 이벤트의 기본 동작을 중단
    }

    onTitleChange = (id, e) => { sessionStorage.setItem('title-' + id, e.target.value); }

    onDescChange = (id, e) => { sessionStorage.setItem('desc-' + id, e.target.value); }
    

    render() {

        var id = this.state.id;
        var selectArr = this.state.selectArr;
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

                <input type='text' className="header" placeholder='Enter a question' onChange={this.onTitleChange.bind(this, id)} />
                <input type='text' className="meta" placeholder='Enter a description' onChange={this.onDescChange.bind(this, id)} />

                <div style={{ display: option !== '2' ? 'block' : 'none' }}>

                    {selectArr.map((data, index) => 
                        <div key={index} className='bottom-gap'>

                            <input type='radio' style={{ display: option === '0' ? 'inline-block' : 'none' }} />
                            <input type='checkbox' style={{ display: option === '1' ? 'inline-block' : 'none' }} />

                            <input type="text" className='input' value={data || ''} onChange={this.onTextChange.bind(this, id, option, index)} />
                            <span className='remove-text' onClick={this.onRemoveClick.bind(this, id, index)}>Remove</span>
                            <span id={'select-add-' + id + '-' + index} className='add-text' onClick={() => this.onAddClick(id, index)}>Add</span>
                        </div>
                    )}

                </div>

                <div style={{ display: option === '2' ? 'block' : 'none' }}>
                    <textarea className='textarea' onChange={this.onTextChange.bind(this, id, option, '')} />
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