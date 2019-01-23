import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses.js';
import getTotalExpenses from '../selectors/expenses-total.js';

const ExpensesSummary = ({expensesCount, expensesTotal }) => (
  const expenseWord = props.expenses.length === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  <div>
    <h2>Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}</h2>
  </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: getTotalExpenses(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
