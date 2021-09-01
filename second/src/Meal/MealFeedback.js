import React from 'react'
import { useState } from 'react';
import swal from 'sweetalert'

export default function MealFeedback() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");

    const [feedbackList, setFeedbackList] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        let newFeedback = {
            name: name, email: email, feedback: feedback
        }

        setFeedbackList([...feedbackList, newFeedback])
        swal('Feedback recieved', 'Congrats', 'success');
    }

    const feedbackListContent = feedbackList.map((feedback) => {
        return <tbody>
            <tr>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.feedback}</td>
            </tr>
        </tbody>



    })

    const feedbackStyle = {
        width: '60%',
        margin: 'auto',
        marginTop: '50px'


    }

    return (
        <div>
            <div id="feedbackForm" style={feedbackStyle} >
                <form onSubmit={onSubmit}>
                    <div>
                        <h3 className="text-center">Feedback Form</h3>
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" required
                            value={name} onChange={(e) => setName(e.target.value)} />
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" required
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Feedback</label><br />
                        <textarea className="form-control" name="message" rows="5"  required
                            value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                    </div>
                    <div>
                        <button className="btn btn-success btn-block">Submit</button>
                    </div>
                    <hr />
                </form>
            </div>

            <div id="prevOrders">
                <hr />
                <h2>Feedbacks</h2>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Comment</th>
                        </tr>
                    </thead>
                    {feedbackListContent}
                </table>

            </div>
        </div>
    )
}
