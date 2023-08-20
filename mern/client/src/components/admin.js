import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router";

const Status = (props) => (
  <>
    <h2>status</h2>
    <h1>{props.stat.bool}</h1>
  </>
);

export default function Admin() { 
  const [form, setForm] = useState({
    bool: "no"
  });
  const navigate = useNavigate();
  const [status, setStatus] = useState([]);

 
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  useEffect(() => {
    async function getStatus() {
      const response = await fetch(`http://localhost:5050/admin/`);
 
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
 
      const status = await response.json();
      setStatus(status);
    }
 
    getStatus();
 
    return;
  }, [status.length]);

  function printStatus() {
    return status.map((stat) => {
      return (
        <Status
          stat={stat}
          key={stat._id}
        />
      );
    });
  }
 
  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      bool: form.bool,
    };
 
    // This will send a post request to update the data in the database.
    await fetch("http://localhost:5050/admin", {
      method: "PATCH",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    window.location.reload(false);
  }


  return (
    <>
      <body>{printStatus()}</body>
      <h1>change</h1>
      <form onSubmit={onSubmit}>
      <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="checkbox"
             name="boolean"
             id="booleanOption"
             value="yes"
             checked={form.bool === true}
             onChange={(e) => updateForm({ bool: e.target.value })}
           />
           <label htmlFor="booleanOption" className="form-check-label">bool Time (BOX DOESN't CHANGE... NO is default when page opened)</label>
          </div>
      </div>
      <div className="form-group">
         <input
           type="submit"
           value="DO IT"
           className="btn btn-primary"
         />
       </div>

      </form>

    </>
  );

}

