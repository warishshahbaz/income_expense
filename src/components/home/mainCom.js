import React, { useState } from 'react'
import InsideCom from './InsideCom'
import ExpenseIncome from './ExpenseIncome';


function MainCom() {

    const [hideCom, setHideCom] = useState(true);
    const [incomeDesc, setIncomDescription] = useState([]);
    const [expenseData, setExpenseData] = useState([]);
    const [checked, setChecked] = useState(false);
    const [ balance,setBlance] = useState([]);
  
   

    
    const toggleCom = () => {
        setHideCom(!hideCom);
    }
   
    return (
        <>
            <header>
                <h2>Expense Tracker</h2>
                <br />
            </header>
            <div className="buttonBox">
                <h3>Total : {balance}</h3>
                {hideCom ? <button onClick={toggleCom} className='hideShow' > Hide </button> : <button onClick={toggleCom} className='hideShow' > Show </button>}
            </div>
            <div className="box">
                <label htmlFor="income">Income</label>
                <span className="income">{incomeDesc}</span>
                <label htmlFor="income">Expense</label>
                <span className="expense">{expenseData}</span>
            </div>
            <ExpenseIncome />
            <InsideCom
                incomeDesc={incomeDesc}
                setIncomDescription={setIncomDescription}
                checked={checked} setChecked={setChecked}
                setExpenseData={setExpenseData}
                setBlance={setBlance}
                hideCom={hideCom}
            /> 

        </>
    )
}

export default MainCom