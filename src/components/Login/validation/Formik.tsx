import { useFormik } from "formik";
import * as Yup from "yup";

export default function useFormikHandler() {
    const formik = useFormik({
        initialValues: {
          email: '',
          password: "",
          name: "",
          userName: "nn"
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(5, 'Must be 10 characters or less')
                .required('Required'),
            userName: Yup.string()
                .max(5, 'Must be 5 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .min(3, "Must be more than 3 characters")
                .required('Required'),
            password: Yup.string()
                .required('No password provided.') 
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
                .matches(/(\d)/, 'must contain one number')
    
          }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return formik;
}