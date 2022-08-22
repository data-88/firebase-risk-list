import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import "./homepage.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from '@mui/icons-material/Logout';
import CheckIcon from '@mui/icons-material/Check';

export default function Homepage() {
  const [risk, setRisk] = useState("");
  const [risk, setRisk] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUidd, setTempUidd] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // read
        onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
          setRisks([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((risk) => {
              setRisks((oldArray) => [...oldArray, risk]);
            });
          }
        });
      } else if (!user) {
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // add
  const writeToDatabase = () => {
    const uidd = uid();
    set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
      risk: risk,
      uidd: uidd
    });

    setRisk("");
  };

  // update
  const handleUpdate = (risk) => {
    setIsEdit(true);
    setRisk(risk.risk);
    setTempUidd(risk.uidd);
  };

  const handleEditConfirm = () => {
    update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`), {
      risk: risk,
      tempUidd: tempUidd
    });

    setRisk("");
    setIsEdit(false);
  };

  // delete
  const handleDelete = (uid) => {
    remove(ref(db, `/${auth.currentUser.uid}/${uid}`));
  };

  return (
    <div className="homepage">
      <input
        className="add-edit-input"
        type="text"
        placeholder="Add risk..."
        value={risk}
        onChange={(e) => setRisk(e.target.value)}
      />

      {risks.map((risk) => (
        <div className="risk">
          <h1>{risk.risk}</h1>
          <EditIcon
            fontSize="large"
            onClick={() => handleUpdate(risk)}
            className="edit-button"
          />
          <DeleteIcon
            fontSize="large"
            onClick={() => handleDelete(risk.uidd)}
            className="delete-button"
          />
        </div>
      ))}

      {isEdit ? (
        <div>
        <CheckIcon onClick={handleEditConfirm} className="add-confirm-icon"/>
        </div>
      ) : (
        <div>
          <AddIcon onClick={writeToDatabase} className="add-confirm-icon" />
        </div>
      )}
        <LogoutIcon onClick={handleSignOut} className="logout-icon" />
    </div>
  );
}
