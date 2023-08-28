import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./issueList.css"

const Issue = (props) => (
 <tr>
   <td className="titleCell">{props.issue.title}</td>
   <td className="contentCell">{props.issue.content}</td>
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



 function issueList() {
   return issues.map((issue) => {
     return (
       <Issue
         issue={issue}
         key={issue._id}
       />
     );
   });
 }

 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h1 className="tableTitle">Open Issues - {issues.length}</h1>
     <table className="table table-striped">
       <thead>
         <tr>
           <th><h2>Subject</h2></th>
           <th><h2>Body</h2></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{issueList()}</tbody>
     </table>
   </div>
 );
}
