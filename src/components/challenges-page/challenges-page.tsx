"use client";
import { FormEvent, FunctionComponent, useState } from "react";
import { create, props } from "@stylexjs/stylex";

const styles = create({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "8px",
  },
  input: {
    padding: "8px 16px",
    borderRadius: "4px",
    borderStyle: "solid",
    borderWidth: "4px",
    borderColor: "#000570",
    width: "640px",
    background: "#000220",
    color: "var(--snow)",
  },
  button: {
    padding: "8px 16px",
    alignItems: "center",
    borderRadius: "4px",
    backgroundColor: "var(--duke)",
    color: "var(--snow)",
    borderStyle: "none",
  },
});

type ChallengePageProps = {
  challengeId: string;
};

export const ChallengesPage: FunctionComponent<ChallengePageProps> = ({
  challengeId,
}) => {
  const [data, setData] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const answer = formData.get("answer");
    const res = await fetch(`/api/challenges/${challengeId}`, {
      method: "POST",
      body: JSON.stringify({ answer }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    setData(data.body.answer);
  };

  return (
    <>
      <h1 style={{ color: "#fff" }}>Challenge day {challengeId}</h1>
      <form onSubmit={handleSubmit} method="POST" {...props(styles.form)}>
        <input type="text" name="answer" {...props(styles.input)} />
        <button type="submit" {...props(styles.button)}>
          Solve
        </button>
      </form>
      <p style={{ color: "#fff" }}>Answer: {data}</p>
    </>
  );
};
