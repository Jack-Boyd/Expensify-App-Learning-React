import React from 'react';
import getTotalExpenses from '../selectors/expenses-total.js';
import {connect} from 'react-redux';
import numeral from 'numeral';


const ExpensesSummary = (props) => (
  <div>
    <h2>Viewing {props.expenses.length} expenses totalling {numeral(getTotalExpenses(props.expenses) / 100).format('$0,0.00')}</h2>
  </div>
);
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
