import { useState } from "react";

function DarkMode() {

    const [dark, setDark] = useState(false);

    return (

        <section>

            <h2>

                {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}

            </h2>

            <button onClick={() => setDark(!dark)}>

                {dark ? "Disable" : "Enable"}

            </button>

        </section>

    );

}

export default DarkMode;