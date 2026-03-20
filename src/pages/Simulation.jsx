import { useNavigate } from "react-router-dom";

export default function Simulation() {
    const nav = useNavigate();

    return (
        <div style={card}>
            <h2>⚡ Select Disruption</h2>

            <button style={btn} onClick={() => nav("/payout")}>
                🌧 Heavy Rain
            </button>

            <button style={btn} onClick={() => nav("/payout")}>
                🌫 Pollution
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

const btn = {
    display: "block",
    margin: "10px",
    padding: "10px"
};