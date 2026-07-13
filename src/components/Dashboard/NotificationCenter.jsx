import { useEffect, useState } from "react";
import { getNotifications } from "../../utils/notificationSystem";
import "./NotificationCenter.css";

function NotificationCenter() {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {

        setNotifications(getNotifications());

    }, []);

    return (

        <div className="notification-card">

            <h2>🔔 Notifications</h2>

            {

                notifications.length === 0 ?

                (

                    <p>No Notifications Yet</p>

                )

                :

                (

                    notifications.map((item) => (

                        <div
                            key={item.id}
                            className="notification-item"
                        >

                            <h4>{item.message}</h4>

                            <small>{item.time}</small>

                        </div>

                    ))

                )

            }

        </div>

    );

}

export default NotificationCenter;