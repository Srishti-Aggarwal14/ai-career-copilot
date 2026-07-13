import { createContext, useContext, useState, useEffect } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {

    const [dashboardData, setDashboardData] = useState({

        resumeScore: 0,

        interviewScore: 0,

        dsaSolved: 0,

        interviewsTaken: 0,

    });

    useEffect(() => {

        refreshDashboard();

    }, []);

    const refreshDashboard = () => {

        const resume =
            JSON.parse(localStorage.getItem("resumeAnalysis")) || {};

        const interview =
            JSON.parse(localStorage.getItem("lastInterview")) || {};

        const profile =
            JSON.parse(localStorage.getItem("profile")) || {};

        setDashboardData({

            resumeScore: resume.score || 0,

            interviewScore: interview.score || 0,

            dsaSolved: profile.dsaSolved || 0,

            interviewsTaken:
                profile.interviewsTaken || 0,

        });

    };

    return (

        <DashboardContext.Provider
            value={{
                dashboardData,
                refreshDashboard,
            }}
        >

            {children}

        </DashboardContext.Provider>

    );

}

export function useDashboard() {

    return useContext(DashboardContext);

}