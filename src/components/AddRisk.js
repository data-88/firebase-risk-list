import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddRisk() {
    const [title, setTitle] = React.useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
        await addDoc(collection(db, "risks"), {
            title,
            treated: false,
        });
        setTitle("");
    }
};

return (
    <form onSubmit={handleSubmit}>
        <div className="input_container">
            <input
                type="text"
                placeholder="Enter risk..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <div className="btn_container">
                    <button>Add</button>
                </div>
        </div>
    </form>
);

}