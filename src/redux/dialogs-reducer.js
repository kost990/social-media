const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let installState = {
            messagesData: [{
                    id: 1,
                    message: 'hi'
                },
                {
                    id: 2,
                    message: 'hi'
                },
                {
                    id: 3,
                    message: 'How are you'
                },
                {
                    id: 4,
                    message: 'yo'
                },
                {
                    id: 5,
                    message: 'yo'
                }
            ],
            dialogsData: [{
                    id: 1,
                    name: 'Liza'
                },
                {
                    id: 2,
                    name: 'Kirill'
                },
                {
                    id: 3,
                    name: 'Kostya'
                },
                {
                    id: 4,
                    name: 'Dimych'
                },
                {
                    id: 5,
                    name: 'Sasha'
                },
                {
                    id: 6,
                    name: 'Larisa'
                }
            ],
            NewMessageBody: ''
}

 const dialogsReducer = (state = installState, action) =>{


        switch (action.type){
            case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                NewMessageBody: action.body
            };
            case SEND_MESSAGE:{
            let body = state.NewMessageBody;
            return {
                ...state,
                NewMessageBody:'',
                messagesData: [...state.messagesData, {id: 6, message: body} ]
            };
            }
            default:
            return state;
        }
};

export const  onSendMessage = () =>  ({type: SEND_MESSAGE});
export const  updateNewMessageBody = (body) =>  ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;
