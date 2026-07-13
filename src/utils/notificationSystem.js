export function getNotifications() {

    return JSON.parse(

        localStorage.getItem("notifications")

    ) || [];

}

export function addNotification(message) {

    const notifications = getNotifications();

    notifications.unshift({

        id: Date.now(),

        message,

        time: new Date().toLocaleString(),

        read: false,

    });

    localStorage.setItem(

        "notifications",

        JSON.stringify(notifications)

    );

}
export function markAsRead(id) {

    const notifications = getNotifications().map((item) =>

        item.id === id

            ? {

                  ...item,

                  read: true,

              }

            : item

    );

    localStorage.setItem(

        "notifications",

        JSON.stringify(notifications)

    );

}
export function clearNotifications() {

    localStorage.removeItem("notifications");

}
export function deleteNotification(id){

    const notifications = getNotifications().filter(

        item=>item.id!==id

    );

    localStorage.setItem(

        "notifications",

        JSON.stringify(notifications)

    );

}