export default function Earnings() {
    return (
        <div style={card}>
            <h2>💰 Earnings</h2>
            <p>Today's Earnings: ₹0</p>
            <p>Last Order: ₹53</p>
            <p>Total Orders: 20</p>
        </div>
    );
}

const card = {
    background: "#302b63",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    minHeight: "100vh"
};