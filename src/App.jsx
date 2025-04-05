import React, { useState } from 'react';

const tasks = [
  'Microeconomics - Varian Ch 1-5',
  'Macroeconomics - Dornbusch/Fischer Ch 1-4',
  'Mathematics - Linear Algebra Basics',
  'Statistics - Probability Distributions',
];

export default function App() {
  const [completed, setCompleted] = useState([]);

  const toggleTask = (task) => {
    setCompleted((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>ISI MSQE Study Tracker</h1>
      <ul>
        {tasks.map((task) => (
          <li
            key={task}
            onClick={() => toggleTask(task)}
            style={{
              cursor: 'pointer',
              textDecoration: completed.includes(task)
                ? 'line-through'
                : 'none',
              marginBottom: '10px',
            }}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
