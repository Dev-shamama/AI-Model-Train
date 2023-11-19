import Link from "next/link";
import React from "react";
import { IoArrowRedoSharp } from "react-icons/io5";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-start">
        <h1>Welcome Dashboard!</h1>
        <p>
          You get any information you feed data on your model. Just type prompt
          and get data.
        </p>
      </div>

      <div className="data-request">
        <div className="question">
          <p>
            <strong>You:</strong> How Are You?
          </p>
        </div>
        <div className="ai-replay">
          <p>
            <strong>GPT:</strong> I am Robot, i am not human being. today i your
            assistant.
          </p>
        </div>
        <div className="question">
          <p>
            <strong>You:</strong> How Are You?
          </p>
        </div>
        <div className="ai-replay">
          <p>
            <strong>GPT:</strong> I am Robot, i am not human being. today i your
            assistant.
          </p>
        </div>
        <div className="question">
          <p>
            <strong>You:</strong> How Are You?
          </p>
        </div>
        <div className="ai-replay">
          <p>
            <strong>GPT:</strong> I am Robot, i am not human being. today i your
            assistant.
          </p>
        </div>
        <div className="question">
          <p>
            <strong>You:</strong> How Are You?
          </p>
        </div>
        <div className="ai-replay">
          <p>
            <strong>GPT:</strong> I am Robot, i am not human being. today i your
            assistant.
          </p>
        </div>

        <div className="question">
          <p>
            <strong>You:</strong> How Are You?
          </p>
        </div>
        <div className="ai-replay">
          <p>
            <strong>GPT:</strong> I am Robot, i am not human being. today i your
            assistant.
          </p>
        </div>
        <div className="question">
          <p>
            <strong>You:</strong> How Are You?
          </p>
        </div>
        <div className="ai-replay">
          <p>
            <strong>GPT:</strong> I am Robot, i am not human being. today i your
            assistant.
          </p>
        </div>
      </div>

      <div className="prompt-bar">
        <div className="prompt-container">
          <input type="text" placeholder="Search..." />
          <span>
            <IoArrowRedoSharp />
          </span>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
