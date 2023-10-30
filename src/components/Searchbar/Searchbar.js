import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { SearchForm, ErrMessage } from './SearchForm.styled';

const SignupSchema = Yup.object().shape({
  search: Yup.string().required('This field is empty. Write something'),
});

export const Searchbar = ({ onSubmit, handleChange }) => {
  return (
    <SearchForm>
      <div className="wrapper">
        <Formik
          initialValues={{
            search: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            onSubmit(values);
          }}
          onChange={values => {
            handleChange(values);
          }}
        >
          <Form>
            <div className="search-item">
              <label htmlFor="search"></label>
              <Field
                id="search"
                name="search"
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Search images and photos"
                //value={title}
                //onChange={handleChange}
              />
              <ErrMessage name="search" component="div" />
              <button type="submit" className="button">
                Search
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </SearchForm>
  );
};
