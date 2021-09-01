// // import React from 'react'
// // import { render,getButtonListOpts, getByTestId,fireEvent,wait,waitFor,cleanup } from '@testing-library/react';
// // import DisplayText from './DisplayText';

// // import '@testing-library/jest-dom/extend-expect'

// // afterEach(cleanup);
// // describe("Test DisplayText", () => {

// //     const userFullName="John Tester";
// //     const getUserFullNameMock=(username:string): [Promise<string>,jest.Mock<Promise<string>,[string]>]=>{
// //         const promise=new Promise ((resolve,reject)=>{
// //             resolve(userFullName);
// //         });

// //         const getUserFullName=jest.fn(
// //             async(username:string):Promise<string>=>{
// //                 return promise;
// //             }
// //         );
// //         return [promise,getUserFullName];
// //     }

// //     it("renders properly",()=>{
// //         const username="testuser";
// //         const[promise,getUserFullName]=getUserFullNameMock(username);
// //         const {baseElement}=render(<DisplayText/>);
// //         expect(baseElement).toBeInTheDocument();
// //     });


// //     it("matches snapshot",()=>{
// //         const username="testuser";
// //         const[promise,getUserFullName]=getUserFullNameMock(username);
// //         const {baseElement}=render(<DisplayText/>);
// //         expect(baseElement).toMatchSnapshot();
// //     });

// //     it("receives input text",()=>{
// //         const username="testuser";
// //         const[promise,getUserFullName]=getUserFullNameMock(username);
// //         const {getByTestId}=render(<DisplayText getUserFullName={getUserFullName}/>)
// //         const input=getButtonListOpts("user-input");
// //         fireEvent.change(input,{target:{value:testuser}});
// //         expect(input).toBeInTheDocument();
// //         expect(input).toHaveValue(testuser);

// //     });

// //     it('show welcome message',async()=>{
// //         const testuser ="testuser";
// //         const [promise,getUserFullName]=getUserFullNameMock(testuser);
// //         const msg=`Welcome to React Testing ${userFullName}`;

// //         const {getByTestId}=render(<DisplayText getUserFullName={getUserFullName}/>)
// //         const input=getByTestId("user-input");
// //         const label=getByTestId("final-msg");

// //         fireEvent.change(input,{target:{value:testuser}});

// //         const btn=getByTestId("input-submit");
// //         fireEvent.click(btn);
// //         expect(label).toBeInTheDocument();
// //         await waitFor(()=>promise)
// //         expect(label.innerHTML).toBe(msg);
// //     })
    
// // }


// // );


// import React from "react";
// import { render,fireEvent, getByTestId ,wait,waitFor, cleanup} from '@testing-library/react';
// import DisplayText from './DisplayText';
// import "@testing-library/jest-dom/extend-expect";

// jest.mock('./UserTodos');
// afterEach(cleanup);
// describe("Test DisplayText", () =>{
//     const userFullName="John Tester";

//     const getUserFullNameMock= (username:string):
//     [Promise<string>, jest.Mock<Promise<string>,[string]>] =>
//     {
//         const promise =new Promise ((resolve,reject)=> {  
//             resolve(userFullName);   }   );

//         const getUserFullName=jest.fn(

//             async(username:string):Promise<string> =>{
//                 return promise ;
//             }
//         );
//         return [promise,getUserFullName];
  

//     }



// it("renders without crashing",() =>
// {
//     const username="testuser";
//     const[promise,getUserFullName]=getUserFullNameMock(username);
//     const{baseElement}=render(<DisplayText />);
//     expect(baseElement).toBeInTheDocument();

// });

// it("Matches snapshot", () => {
//     const username="testuser"
//     const[promise,getUserFullName]=getUserFullNameMock(username);
//     const{baseElement}=render( <DisplayText getUserFullName={getUserFullName} />);
//     expect(baseElement).toMatchSnapshot();


// });

// it("receives input text",()  =>{

//     const username="testuser";
//     const[promise,getUserFullName]=getUserFullNameMock(username);
//     const{getByTestId}=render( <DisplayText getUserFullName={getUserFullName} />);
//     const input= getByTestId("user-input");
//     fireEvent.change(input,{target:{value:username}});
//     expect(input).toBeInTheDocument();
//     expect(input).toHaveValue(username);
// }
// );

// it("show welcome message", async()=>{
//     const testuser="testuser";
//     const[promise,getUserFullName]=getUserFullNameMock(testuser);
//     const msg=`Welcome to React Testing ${userFullName}`;

//     const{getByTestId}=render( <DisplayText getUserFullName={getUserFullName} />);
//     const input= getByTestId("user-input");
//     const label=getByTestId("final-msg");
//     fireEvent.change(input,{target:{value:testuser}});

//     const btn = getByTestId("input-submit");
//     fireEvent.click(btn);
//     expect(label).toBeInTheDocument();
//     await waitFor(() => promise)
//     expect(label.innerHTML).toBe(msg);
// })

// }


// );
