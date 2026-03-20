export default function Profile() {
    return (
        <div style={card}>
            <h2>👤 Profile</h2>
            <p>Name: Ravi</p>
            <p>Orders: 505</p>
            <p>Experience: 8 months</p>
        </div>
    );
}

const card = {
    background: "#302b63",
    padding: "20px",
    color: "white",
    minHeight: "100vh"
};