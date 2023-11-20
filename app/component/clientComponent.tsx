"use client";
import {
  IoArrowRedoSharp,
  IoChatbubblesOutline,
  IoLogoFacebook,
  IoLogoGoogle,
} from "react-icons/io5";
import { FormEvent, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "@/context/AuthContext";
import { redirect, useRouter } from "next/navigation";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { GoHistory } from "react-icons/go";
import Link from "next/link";
////////////////////////////////////////
// Sign Up Form
////////////////////////////////////////
export const SignUpForm = () => {
  const auth = useAuth();

  if (auth?.isAuth === true) {
    redirect("/dashboard");
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [btnStatus, setBtnStatus] = useState(false);
  const [btnText, setBtnText] = useState("Sign Up");

  const SignUpHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnStatus(true);
    setBtnText("Loading...");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      }
    );

    const result = await response.json();

    if (result.success === true) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
    setBtnStatus(false);
    setBtnText("Sign Up");
  };

  return (
    <>
      <form className="login-form" onSubmit={SignUpHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="form-button">
          <button type="submit" disabled={btnStatus}>
            {btnText}
          </button>
        </div>
      </form>

      <div className="loginProvider">
        <button className="login-provider-button">
          <div className="icon">
            <IoLogoGoogle />
          </div>
          <span>Google</span>
        </button>

        <button className="login-provider-button">
          <div className="icon">
            <IoLogoFacebook />
          </div>
          <span>Facebook</span>
        </button>
      </div>
    </>
  );
};

////////////////////////////////////////
// Login Form
////////////////////////////////////////
export const LoginForm = () => {
  const router = useRouter();
  const auth = useAuth();

  if (auth?.isAuth === true) {
    redirect("/dashboard");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [btnStatus, setBtnStatus] = useState(false);
  const [btnText, setBtnText] = useState("Login");

  const LoginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnStatus(true);
    setBtnText("Loading...");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      }
    );

    const result = await response.json();

    if (result.success === true) {
      toast.success(result.message);
      localStorage.setItem("token", result.token);
      auth?.setIsAuth(true);
      router.refresh();
    } else {
      toast.error(result.message);
    }
    setBtnStatus(false);
    setBtnText("Login");
  };

  return (
    <>
      <form className="login-form" onSubmit={LoginHandler}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <div className="form-button">
          <button type="submit" disabled={btnStatus}>
            {btnText}
          </button>
        </div>
      </form>

      <div className="loginProvider">
        <button className="login-provider-button">
          <div className="icon">
            <IoLogoGoogle />
          </div>
          <span>Google</span>
        </button>

        <button className="login-provider-button">
          <div className="icon">
            <IoLogoFacebook />
          </div>
          <span>Facebook</span>
        </button>
      </div>
    </>
  );
};

////////////////////////////////////////
// Dashboard
////////////////////////////////////////
export const ChatShowPrompt = () => {
  const auth = useAuth();
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState([]);

  const [btnStatus, setBtnStatus] = useState(false);
  const [btnText, setBtnText] = useState<any>(<IoArrowRedoSharp />);

  if (auth?.isAuth === false) {
    redirect("/login");
  }

  const getHistory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/chat/getchat`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `${localStorage.getItem("token")}` || "",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success === true) {
        setHistory(result.data);
      }
    } catch (error) {
      console.error("Error fetching History data", error);
      setHistory([]);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  const ChatPromptHandler = async () => {
    try {
      setBtnStatus(true);
      setBtnText("Loading...");
      setPrompt("");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/chat/chat`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `${localStorage.getItem("token")}` || "",
          },
          body: JSON.stringify({ prompt }),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      if (result.success === true) {
        getHistory();
      }
      setBtnStatus(false);
      setBtnText(<IoArrowRedoSharp />);
    } catch (error) {
      console.error("Error User Prompt type:", error);
      setHistory([]);
    }
  };

  return (
    <>
      {/* Main Reply ChatBot */}
      <div className="data-request">
        {history && history.length == 0 ? (
          <div className="start-chating">
            <div className="content">
              <span>
                <IoChatbubblesOutline />
              </span>
              <h1>Start Now Chat!</h1>
            </div>
          </div>
        ) : (
          history.map((item: any) => (
            <div key={item._id}>
              <div className="question">
                <p>
                  <strong>You:</strong> {item.prompt}
                </p>
              </div>

              <div className="ai-replay">
                <p>
                  <strong>GPT:</strong> {item.reply}
                </p>
              </div>
            </div>
          ))
        )}

        {btnStatus === true && (
          <div className="response-loading">
            <h4>Loading...</h4>
          </div>
        )}
      </div>

      {/* Prompt Field */}
      <div className="prompt-bar">
        <div className="prompt-container">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? ChatPromptHandler() : null)}
            placeholder="Search..."
          />
          <button disabled={btnStatus} onClick={ChatPromptHandler}>
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

////////////////////////////////////////
// History
////////////////////////////////////////
export const MaintainHistory = () => {
  const router = useRouter();
  const auth = useAuth();

  dayjs.extend(relativeTime);

  const [history, setHistory] = useState([]);

  if (auth?.isAuth === false) {
    redirect("/login");
  }

  const getHistory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/chat/getchat`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `${localStorage.getItem("token")}` || "",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success === true) {
        setHistory(result.data);
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setHistory([]);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      {history.length == 0 ? (
        <div className="start-chating">
          <div className="content">
            <span>
              <GoHistory />
            </span>
            <h1>History Not Yet!</h1>
          </div>
        </div>
      ) : (
        history.map((item: any, index: number) => {
          const nameTime = dayjs(item.date).fromNow();
          const timeAgo = nameTime.slice(0, -3);
          return (
            <div key={index}>
              <div className="historyTime">
                <h3>{timeAgo}</h3>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Prompt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.prompt}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })
      )}
    </>
  );
};

////////////////////////////////////////
// Logout Btn
////////////////////////////////////////
export const LogoutBtn = () => {
  const auth = useAuth();

  return (
    <Link href="#" onClick={() => auth?.Logout()}>
      Logout
    </Link>
  );
};
