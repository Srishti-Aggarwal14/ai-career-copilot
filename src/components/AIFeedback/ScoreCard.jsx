import "./ScoreCard.css";
import SkillProgress from "./SkillProgress";

function ScoreCard({

    overall,
    confidence,
    technical,
    communication,
    vocabulary

}) {

    return (

        <div className="score-card">

            <h2>

                Interview Score

            </h2>

            <div className="overall-score">

                {overall}/10

            </div>

            <div className="score-grid">

                <div>

                    <span>Confidence</span>

                    <strong>{confidence}/10</strong>

                </div>

                <div>

                    <span>Technical</span>

                    <strong>{technical}/10</strong>

                </div>

                <div>

                    <span>Communication</span>

                    <strong>{communication}/10</strong>

                </div>

                <div>

                    <span>Vocabulary</span>

                    <strong>{vocabulary}/10</strong>

                </div>

            </div>

            <div className="progress-section">

                <SkillProgress
                    title="Confidence"
                    score={confidence * 10}
                />

                <SkillProgress
                    title="Technical"
                    score={technical * 10}
                />

                <SkillProgress
                    title="Communication"
                    score={communication * 10}
                />

                <SkillProgress
                    title="Vocabulary"
                    score={vocabulary * 10}
                />

            </div>

        </div>

    );

}

export default ScoreCard;