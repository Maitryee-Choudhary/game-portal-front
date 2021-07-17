import React from "react";
import { Link } from "react-router-dom";

// This component is just a placeholder we can redirect to any other page as directed later.

const ThankYouComponent = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "40px" }}>
                    Call Ended. Thanks a lot for joining
                </p>
                <Link to="/">Call Again</Link>
            </div>
        </>
    );
};

export default ThankYouComponent;
