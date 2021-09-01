// import React,{useState,FC} from 'react'
// import UserTodos from './UserTodos';


// interface DisplayTextProps {
//     getUserFullName: (username: string) => Promise<string>
// }



// const DisplayText: FC<DisplayTextProps> =

//     ({ getUserFullName }) => {
//         const [txt, setTxt] = useState("");

//         const [msg, setMsg] = useState("");

//         const [todoControl, setTodoControl] = useState < ReturnType < typeof UserTodos >> ();


//         const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
//             setTxt(e.target.value);

//         }

//         const onClickShowMsg = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//             e.preventDefault();
//             setTodoControl(null);
//             setMsg(`Welcome to React testing, ${await getUserFullname(txt)}`);    
//             setTodoControl(<UserTodos username={txt} />);
//         }
    
//     }
//         return (
//             <form>
//                 <div>
//                     <label> Enter your Name</label>

//                     <div>
//                         <input data-testid="user-input" value={txt} onChange={onChangeTxt} />
//                     </div>

//                     <div>
//                         <button data-testid="input-submit" onClick={onClickShowMsg}>
//                             SHOW Message
//                         </button>
//                     </div>

//                     <div>
//                         <label data-testid="final-msg" >{msg}</label>
//                     </div>
//                 </div>

//                 <div>
//                     {todoControl}
//                     This is just a jest entry
//                 </div>
//             </form>

//         )

//     }
// export default DisplayText;
