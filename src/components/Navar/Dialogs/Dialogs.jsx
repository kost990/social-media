import React from 'react';
import s from './Dialogs.module.css'
import DiologsItems from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Field, Form, Formik } from 'formik';


const Dialogs = (props) => {
    let state = props.DialogsPage;

    let messageElements = state.messagesData.map((m,index) => <Message message={m.message} id={m.id} key={index} />);
    let newMessageElements = React.createRef();
    let dialogsElement = state.dialogsData.map((d,index) => <DiologsItems name={d.name} id={d.id} key={index} />);
    let NewMessageBody = state.NewMessageBody;

    let onSendMessage = () => {
        props.onSendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={s.message}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <Formik
                            initialValues={{
                                message: '',
                            }}
                            onSubmit={async (values, { setSubmitting }) => {
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <label>new message
                                        <div>
                                            <Field value={NewMessageBody} ref={newMessageElements}
                                                type="message" name="message" onChange={onNewMessageChange} />
                                        </div>
                                    </label>
                                    <div>
                                        <button  onClick={onSendMessage} type="submit" disabled={isSubmitting}>
                                            Send
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Dialogs;