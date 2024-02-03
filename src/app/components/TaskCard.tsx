"use client";

import { useState } from "react";

type TaskCardProps = {
  taskName: string;
  taskDescription: string;
};

export default function TaskCard({ taskName, taskDescription }: TaskCardProps) {
  const [isChecked, setIsChecked] = useState(false);
  const taskCard = document.querySelector(`#${taskName}`);

  const checkHandler = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      taskCard.classList.toggle("bg-red-800");
    }
  };

  return (
    <div
      className="flow mx-auto max-w-prose rounded-md border p-8"
      id="taskCard"
    >
      <h3>{taskName}</h3>
      <p>{taskDescription}</p>
      <label>
        Complete?
        <input
          type="checkbox"
          id={taskName}
          className="ml-4"
          checked={isChecked}
          onChange={checkHandler}
        />
      </label>
    </div>
  );
}