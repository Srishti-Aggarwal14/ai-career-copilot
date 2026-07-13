import "./FeedbackCard.css";

function FeedbackCard({

    title,
    feedback,
    type

}) {

    return (

        <div className={`feedback-card ${type}`}>

            <h3>

                {title}

            </h3>

            <p>

                {feedback}

            </p>

        </div>

    );

}

export default FeedbackCard;