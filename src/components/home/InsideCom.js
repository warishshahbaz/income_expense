import React, { useState, incAmount } from 'react'
import TransectionView from "./TransectionView"

function InsideCom({ hideCom,incomeDesc, setIncomDescription, setChecked, checked, setExpenseData, setBlance }) {
    const [income, setIncome] = useState('');
    const [expense, setExpense] = useState('');
    const [descript, setDescript] = useState('');
    const [desArr,setDesArr] = useState([]);
    const[colorToggle,setColorTogle] = useState(false);

    const radioIncomeHandle = (e) => {
        setChecked(true);
        setColorTogle(true)
    }
    const radioExpenseHandle = (e) => {
        setChecked(false)
        setColorTogle(false)
    }
    const addtransection = () => {
        if(income === "" || descript === "" ){
            alert("Please Fill Amount");
        }
        else if (checked) {
            setColorTogle(false);
            setBlance((preVal) => {
                return [Number(preVal) + Number(income)]
            })
            setIncomDescription((preVal) => {
                return [Number(preVal) + Number(income)]
            });

            setDesArr((preVal)=>{
                return [...preVal,{descript,income}];
            })
            
        } else {
            setColorTogle(true);
            setBlance((preVal) => {
                return [Number(preVal) - Number(income)]
            })
            setExpenseData((preVal) => {
                return [Number(preVal) + Number(income)]

            })
           

            setDesArr((preVal)=>{
                return [...preVal,{descript,income}];
            })
        }
        setIncome('');
        setDescript('');
    }

    return (
        <>
        {
            hideCom ?  <div className="mainInsideCom">
                <div className='inputBox'>
                    <input type="text"
                        className='btn1'
                        placeholder='Amount'
                        name='amount'
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                    />
                    <input type="text"
                        className='btn1'
                        placeholder='Description'
                        name='description'
                        value={descript}
                        onChange={(e) => setDescript(e.target.value)}
                    />
                    <div className="radio">
                        <input type="radio" name='show' value={income} onChange={radioIncomeHandle} />
                        <label htmlFor=""> Income</label>
                        <input type="radio" name='show' value={expense} onChange={radioExpenseHandle} />
                        <label htmlFor=""> Expense</label>
                    </div>
                    <button className='transectionBtn' onClick={addtransection}>Add Transection</button>
                </div>
            </div> : null
        }
           
            <TransectionView desArr={desArr} setDescript={setDescript} income={incomeDesc} descript={desArr} colorToggle={colorToggle}/>
        </>
    )
}

export default InsideCom