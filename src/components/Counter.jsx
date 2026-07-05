import { useState, useEffect } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("Current Count is",  count);

    }, [count]);

    return (

        <section>

            <h2>{count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
            <button onClick={() => setCount(0)}>
                 Reset
            </button>

        </section>

    );
}

export default Counter;