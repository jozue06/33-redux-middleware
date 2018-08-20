import React from 'react';
import { connect } from 'react-redux';
import { addCategory, deleteCategory } from '../../reducers/category';

import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

const CategoryContainer = (props) => {
  return (
    <section>
      <h2>Category</h2>
      <CategoryForm buttonText="add Category" onComplete={props.addCategory}  />
      <CategoryList categories={props.categories} deleteCategory={props.deleteCategory} />
    </section>
  );
};

const mapStateToProps = (state) => ({ categories : state.categoryState.categories });
const mapDispatchToProps = (dispatch) => ({
  addCategory: category => dispatch(addCategory(category)),
  // updateCategory: category => dispatch(updateCategory(category)),
  deleteCategory: category => dispatch(deleteCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);