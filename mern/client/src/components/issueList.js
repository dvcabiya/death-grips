import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./issueList.css"

const Issue = (props) => (
 <tr>
   <td className="titleCell">{props.issue.title}</td>
   <td className="contentCell">{props.issue.content}</td>
   <td>
     <Link className="btn btn-link" to={"/"}><b>Edit</b></Link> <b>—</b>
     <button className="btn btn-link"
       onClick={() => {
         props.deleteIssue(props.issue._id);
       }}
     >
       <b>Delete</b>
     </button>
   </td>
 </tr>
);

export default function IssueList() {
 const [issues, setIssues] = useState([]);

 // This method fetches the records from the database.
 useEffect(() => {
   async function getIssues() {
     const response = await fetch(`http://localhost:5050/issues/`);

     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }

     const issues = await response.json();
     setIssues(issues);
   }

   getIssues();

   return;
 }, [issues.length]);

 // This method will delete a record
 async function deleteIssue(id) {
   await fetch(`http://localhost:5050/issues/${id}`, {
     method: "DELETE"
   });

   const newIssues = issues.filter((el) => el._id !== id);
   setIssues(newIssues);
 }

 // This method will map out the records on the table
 function issueList() {
   return issues.map((issue) => {
     return (
       <Issue
         issue={issue}
         deleteIssue={() => deleteIssue(issue._id)}
         key={issue._id}
       />
     );
   });
 }

 // This following section will display the table with the records of individuals.
 return (
   <div className="dgFont">
     <h3>Open Issues</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Subject</th>
           <th>Body</th>
           <th></th>
         </tr>
       </thead>
       <tbody>{issueList()}</tbody>
     </table>
   </div>
 );
}
