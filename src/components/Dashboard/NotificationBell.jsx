import { useEffect, useState } from "react";
import "./NotificationBell.css";
import {
  getNotifications,
  markAsRead,
  clearNotifications,
  deleteNotification
} from "../../utils/notificationSystem";

function NotificationBell() {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {

    const loadNotifications = () => {

      setNotifications(getNotifications());

    };

    loadNotifications();

    window.addEventListener("storage", loadNotifications);

    return () =>
      window.removeEventListener("storage", loadNotifications);

  }, []);

  const unread = notifications.filter(
    (item) => !item.read
  ).length;

  return (

    <div className="notification-card">

      <h2>

        🔔 Notifications

        {unread > 0 && (

          <span className="badge">

            {unread}

          </span>

        )}

      </h2>
      <button
    className="clear-btn"
    onClick={() => {

        clearNotifications();

        setNotifications([]);

    }}
>

    🗑 Clear All

</button>

      {

        notifications.length === 0 ? (

          <p>No Notifications Yet.</p>

        ) : (

          notifications.map((item) => (

            <div
    key={item.id}
    className={`notification ${item.read ? "read" : ""}`}
    onClick={() => {

        markAsRead(item.id);

        setNotifications(getNotifications());

    }}
>

              <p>{item.message}</p>

<button
  onClick={(e) => {

    e.stopPropagation();

    deleteNotification(item.id);

    setNotifications(getNotifications());

  }}
>
  ❌
</button>

<small>{item.time}</small>

            </div>

          ))

        )

      }

    </div>

  );

}

export default NotificationBell;