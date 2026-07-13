export function getXPData() {

    return JSON.parse(
        localStorage.getItem("xpData")
    ) || {

        xp: 0,

        level: 1

    };

}

export function addXP(points) {

    const data = getXPData();

    data.xp += points;

    data.level = Math.floor(data.xp / 100) + 1;

    localStorage.setItem(
        "xpData",
        JSON.stringify(data)
    );

    return data;

}
