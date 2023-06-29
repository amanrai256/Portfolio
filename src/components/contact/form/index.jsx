import React from "react";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

const Form = () => {
    const {
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (e) => {
     e.preventDefault()
    };

    // const formSuccess = () => {
    //     toast("Thanks for submitting your Query!");
    //     document.getElementById("queryForm").reset();
    // };

    return (
        <div className="query-form">
            <ToastContainer />
            <form
                id="queryForm"
                onSubmit={handleSubmit}
            >
                <div className="input-field">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                    />
                </div>

                <div className="input-field space">
                    <input
                        type="text"
                        name="reply_to"
                        placeholder="Email"
                    />
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="phone_number"
                        placeholder="Phone"
                    />
                </div>

                <div className="input-field space">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                    />
                </div>

                <div className="input-field full-width">
                    <textarea
                        className="textarea"
                        name="message"
                        placeholder="Your message"
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;