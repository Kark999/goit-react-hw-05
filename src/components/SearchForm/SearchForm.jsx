import css from "./SearchForm.module.css";
import { toast } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = { searchTerm: "" };

const SearchForm = ({ onSearchQuery }) => {
  const handleSubmit = (values) => {
    if (!values.searchTerm) {
      toast.error("Please enter a search term");
      return;
    }
    onSearchQuery(values.searchTerm);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <Field
          className={css.field}
          type="text"
          name="searchTerm"
          autoComplete="off"
          autoFocus
          placeholder="Search movie by name"
        />
        <ErrorMessage
          className={css.error}
          name="searchTerm"
          component="span"
        />

        <button className={css.submitBtn} type="submit" aria-label="Search">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
