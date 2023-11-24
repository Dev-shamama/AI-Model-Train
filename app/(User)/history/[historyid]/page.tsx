import { HistoryContainer } from "@/app/styleComponent/Dashboard.styled";
import React from "react";

const getSingleHistory = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/chat/getsinglechat?id=${id}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        cache: "no-cache",
      }
    );
    if (!res.ok) {
      throw new Error(`Request failed with status: ${res.status}`);
    }
    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return []; // Return an empty array or handle the error appropriately
  }
};

const History = async ({ params }: { params: any }) => {
  const data = await getSingleHistory(params.historyid);

  return (
    <>
      <div className="dashboard-start">
        <h1>History Detail</h1>
      </div>

      <HistoryContainer>
        <div className="question">
          <p>
            <strong>You:</strong> {data.prompt}
          </p>
        </div>

        <div className="ai-replay">
          <p>
            <strong>GPT:</strong> {data.reply}
          </p>
        </div>
      </HistoryContainer>
    </>
  );
};

export default History;
