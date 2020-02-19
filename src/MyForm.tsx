import * as React from 'react';
import { Button } from '@material-ui/core';
import {Formik, Form, Field} from 'formik';
import { MyField } from './MyField';


interface Values{
    firstName:string,
    lastName:string,
}

interface Props{
    onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({onSubmit}) => {
    return (
    <Formik initialValues={{firstName: '', lastName: ''}} onSubmit={(values) => {
        onSubmit(values)
    }}>
    
    {({values}) => (
        <Form>
            <div>
                <Field name="firstName" placeholder="First Name" component={MyField} />
            </div>
            <div>
            <Field name="lastName" placeholder="Last Name" component={MyField} />
            </div>
            <Button type="submit">Submit</Button>
            
        </Form>
    )}
    </Formik>
    
    
    );
    
}