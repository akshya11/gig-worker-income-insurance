import { useNavigate } from "react-router-dom";

export default function Register() {
    const nav = useNavigate();

    return (
        <div style={container}>
            <div style={card}>
                <h2>Register</h2>

                <input placeholder="Email" style={input} />
                <input type="password" placeholder="Password" style={input} />
                <input type="password" placeholder="Confirm Password" style={input} />

                <button style={btn} onClick={() => nav("/")}>
                    Register
                </button>
            </div>
        </div>
    );
}

const container = {
    background: "#0f0c29",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
};

const card = {
    background: "#302b63",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center"
};

const input = {
    display: "block",
    margin: "10px",
    padding: "10px",
    width: "200px"
};

const btn = {
    padding: "10px",
    background: "#8f94fb",
    border: "none",
    color: "white"
};