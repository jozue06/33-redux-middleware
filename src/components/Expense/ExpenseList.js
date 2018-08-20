import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../../reducers/expense';
import S from '../../components/styles/styles.js'


const ExpenseList = (props) => {
  return (
    <S.Border>
    <ul>
     
       <S.Text>{props.expenses.filter(expense => expense.categoryID === props.id ).map(expense =><li key={expense.id}>Expense:{expense.name} 
      <br />
      Expense Amount: {expense.amount}
      <br />
      <S.Button expense={expense} onClick={() => props.deleteExpense(expense)}>Remove Expense</S.Button>
      
      </li>)}
      
    </S.Text>
    </ul>
    </S.Border>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired
}


const mapStateToProps = (state) => ({ expenses : state.expenseState.expenses });
const mapDispatchToProps = (dispatch) => ({
  deleteExpense: expense => dispatch(deleteExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);
