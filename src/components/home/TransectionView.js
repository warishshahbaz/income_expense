import React from "react";

function TransectionView({ desArr, income, descript, colorToggle }) {
  return (
    <>
      <div className="trasectinView">
        <table>
          <thead>
            <tr className="traw">
              <th className="td1">Amount</th>
              <th className="td2">Description</th>
            </tr>
          </thead>
          <tbody>
            { desArr.map((ele,i) => {
              return (
                <tr style={{ backgroundColor: colorToggle ? "red" : "green" }} key={i} >
                  <td>{colorToggle?`- ${ele.income}` :`+ ${ele.income}` }</td>
                  <td>{ele.descript}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TransectionView;
