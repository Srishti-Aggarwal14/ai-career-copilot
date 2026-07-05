import { useState, useEffect } from "react";

function Welcome() {
    const [message, setMessage] = useState("Welcome 👋");

    useEffect(() => {
        setTimeout(() => {
            setMessage("Checking Resume");
        }, 2000);
        setTimeout(() => {
            setMessage("Preparing Interview Questions");
        }, 4000);
        setTimeout(() => {
            setMessage("Ready to Crack Placements");
        }, 6000);

    }, []);

    return (

        <section>

            <h2>{message}</h2>

        </section>

    );

}

export default Welcome;