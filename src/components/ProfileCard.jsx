import "./ProfileCard.css";

function ProfileCard({
    name,
    profession,
    age,
    image,
    isAvailable,
}) {
    return (
        <div className="profile-card">
            <img src={image} alt={name} />

            <h2>{name}</h2>

            <p>
                <strong>Profession:</strong> {profession}
            </p>

            <p>
                <strong>Age:</strong> {age}
            </p>

            <p>
                <strong>Status:</strong>{" "}
                {isAvailable ? "🟢 Available" : "🔴 Not Available"}
            </p>

            <button>View Profile</button>
        </div>
    );
}

export default ProfileCard;