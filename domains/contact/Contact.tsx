import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input } from "@/components/formik/input";
import { TextArea } from "@/components/formik/textarea";
import { ErrorMessage } from "@/components/formik/error";
import { Widget } from "@typeform/embed-react";

const Contact: React.FC = () => {
    // const validationSchema = Yup.object().shape({
    //     email: Yup.string().email('Please enter valid email'),
    //     content: Yup.string().required('Leave some content please'),
    // });

    // const initialValues = { content: '', email: '' };

    // const handleSubmit = (values: typeof initialValues) => {
    //     console.log(values);
    // };

    return <Widget id="RPgaDvUP" style={{ height: "350px" }} className="my-form" />

    // return (
    //     <Formik validateOnChange={false} initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
    //         {(data) => (
    //             <Form>
    //                 <Widget id="RPgaDvUP" className="my-form" />
    //                 {/* {JSON.stringify(data, null, 2)} */}
    //                 <div className="grid gap-4 py-4">
    //                     <div className="pb-4">
    //                         <Label htmlFor="email">E-mail</Label>
    //                         <Input type="email" id="email" name="email" placeholder="henkdegroot@xs4all.nl" className="mt-2" data-1p-ignore />
    //                         <ErrorMessage name="email" />
    //                     </div>
    //                     <div>
    //                         <Label htmlFor="content">Content</Label>
    //                         <TextArea id="content" name="content" />
    //                         <ErrorMessage name="content" />
    //                     </div>
    //                 </div>

    //                 <div className="text-right">
    //                     <Button type="submit">Send</Button>
    //                 </div>
    //             </Form>
    //         )}
    //     </Formik>
    // )
}

export { Contact }