import { Link, Outlet } from "react-router-dom";

function Dashboard() {

    return (

        <div>

            <h1>📊 Dashboard</h1>

            <Link to="profile">Profile</Link>

            {" | "}

            <Link to="analytics">Analytics</Link>

            {" | "}

            <Link to="settings">Settings</Link>

            <hr />

            <Outlet />

        </div>

    );

}

export default Dashboard;