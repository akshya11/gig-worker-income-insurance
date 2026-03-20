import { useNavigate } from "react-router-dom";

export default function Plans() {
    const nav = useNavigate();

    return (
        <div style={card}>
            <h2>📊 Insurance Plans</h2>

            <div style={plan}>₹30 → ₹300</div>
            <div style={plan}>₹50 → ₹600</div>
            <div style={plan}>₹80 → ₹1000</div>

            <button style={btn} onClick={() => nav("/simulation")}>
                Continue
            </button>
        </div>
    );
}

const card = {
    background: "#302b63",
    padding: "20px",
    color: "white",
    minHeight: "100vh"
};

const plan = {
    background: "#8f94fb",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px"
};

const btn = {
    padding: "10px",
    marginTop: "20px"
};