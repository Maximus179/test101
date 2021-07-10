import Heading from "./../../UI/Heading/Heading";
import Sidebar from "./Sidebar";
import React from "react";
import { Link } from "react-router-dom";;

const Feedback = () => {
    function Thankyou() {
        alert("Thank you for the feedback.")
    }
    return (
        <>
            <Heading />
            <Sidebar />\
            <br/>
            <br/>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 offset-md-4 mt-3">
                        <h2 style={{background:"lightgrey"}} class="p-3 mb-3">Feedback Form</h2>
                        <hr class="my-2"/>
                        <br/>
                        <br/>
                        <form action="#">
                            <div class="row">
                                <input type="text" id="text" class="row_input" placeholder="Enter your name" required />
                            </div><br/>
                            <div class="row">
                                <input type="email" id="email" class="row_input" placeholder="Enter email address" required />
                            </div><br/>
                            <div class="row">
                                <textarea name="message" id="message" class="row_input" cols="30" rows="5" placeholder="Message" required></textarea>
                            </div><br/>
                            <div class="row">
                                <div class="button">
                                <input class="button btn btn-warning" type="submit" value="Submit" onClick={Thankyou}/>
                                </div>
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feedback;