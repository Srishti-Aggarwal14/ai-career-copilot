export function getDashboardData() {

    const resume =
        JSON.parse(localStorage.getItem("resumeAnalysis")) || {};

    const interview =
        JSON.parse(localStorage.getItem("lastInterview")) || {};

    const profile =
        JSON.parse(localStorage.getItem("profile")) || {};

    return {

        resumeScore: resume.score || 0,

        interviewScore: interview.score || 0,

        company: interview.company || "No Interview",

        dsaSolved: profile.dsaSolved || 0,

        interviewsTaken: profile.interviewsTaken || 0

    };

}