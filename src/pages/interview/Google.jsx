import React from "react";

export default function Google() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Google Interview Questions</h2>

      <p><b>Q1.</b> What is Big-O notation?</p>
      <p><b>Answer:</b> It describes time and space complexity.</p>
      <p><b>Explanation:</b> Big-O shows how an algorithm scales with input size.</p>

      <hr />

      <p><b>Q2.</b> Difference between Array and Linked List?</p>
      <p><b>Answer:</b> Arrays have contiguous memory, Linked Lists do not.</p>
      <p><b>Explanation:</b> Linked lists allow dynamic size but slower access.</p>
    </div>
  );
}
