import { useState, useEffect } from "react";

function TitleChanger() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        document.title = `Clicks : ${count}`;

    }, [count]);

    return (
        <section>

            <h2>You clicked {count} times</h2>

            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>

        </section>
    );
}

export default TitleChanger;