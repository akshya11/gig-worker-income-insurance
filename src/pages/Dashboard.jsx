import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const nav = useNavigate();

    return (
        <div style={container}>

            {/* 🔝 HEADER */}
            <div style={header}>
                <h2>🍔 Zomato Delivery Partner</h2>
                <p style={{ opacity: 0.7 }}>Welcome back 👋</p>
            </div>

            {/* 💰 EARNINGS CARD */}
            <div style={earningsCard}>
                <p>Today's Earnings</p>
                <h1>₹0</h1>
                <span>Start delivering to earn 🚀</span>
            </div>

            {/* ⭐ PERFORMANCE CARD */}
            <div style={performanceCard}>
                <p>⭐ Best Performance</p>
                <h3>20/20 Orders Completed</h3>
            </div>

            {/* 🔲 GRID OPTIONS */}
            <div style={grid}>
                <div style={box} onClick={() => nav("/earnings")}>
                    💰
                    <p>Earnings</p>
                </div>

                <div style={box} onClick={() => nav("/plans")}>
                    📊
                    <p>Plans</p>
                </div>

                <div style={box} onClick={() => nav("/simulation")}>
                    ⚡
                    <p>Simulation</p>
                </div>

                <div style={box} onClick={() => nav("/profile")}>
                    👤
                    <p>Profile</p>
                </div>
            </div>

            {/* 🔻 BOTTOM STATUS */}
            <div style={bottom}>
                🚚 Food Delivery Mode Active
            </div>

        </div>
    );
}

/////////////////////////////////////////////////////
// 🎨 STYLES (Premium Purple Theme)
/////////////////////////////////////////////////////

const container = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    color: "white",
    padding: "20px",
    fontFamily: "Arial"
};

const header = {
    marginBottom: "20px"
};

const earningsCard = {
    background: "#302b63",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    marginBottom: "20px",
    boxShadow: "0 0 15px rgba(0,0,0,0.5)"
};

const performanceCard = {
    background: "#8f94fb",
    color: "black",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
    marginBottom: "20px"
};

const grid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px"
};

const box = {
    background: "#302b63",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 0 10px rgba(0,0,0,0.4)"
};

const bottom = {
    marginTop: "30px",
    textAlign: "center",
    opacity: "0.7"
};