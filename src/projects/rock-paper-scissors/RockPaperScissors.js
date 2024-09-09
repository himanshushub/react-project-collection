import React, { useRef, useState } from "react";

export default function RockPaperScissors() {
  const choices = {
    rock: "✊",
    paper: "✋",
    scissors: "✂️",
  };

  const [usersChoice, setUsersChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const resultRef = useRef(null);

  const handleSelect = (userChoice) => {
    const computerChoice = randomChoiceGen();
    setComputerChoice(computerChoice);
    setUsersChoice(userChoice);

    resultRef.current = determineWinner(userChoice, computerChoice);
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return "It's a tie!";

    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      return "You win!";
    }

    return "You lose!";
  };

  const randomChoiceGen = () => {
    const idx = Math.floor(Math.random() * 3);
    const choiceKey = Object.keys(choices)[idx];
    return choiceKey;
  };

  const resetChoices = () => {
    setComputerChoice(null);
    setUsersChoice(null);
    resultRef.current = null;
  };

  const GetUserChoices = () => {
    return Object.keys(choices).map((key) => {
      return (
        <span
          key={key}
          style={{ fontSize: "55px", cursor: "pointer" }}
          onClick={() => {
            handleSelect(key);
          }}
        >
          {choices[key]}
        </span>
      );
    });
  };

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ fontSize: "40px", marginBottom: "25px" }}>
        ROCK PAPER SCISSORS
      </div>
      <div
        style={{
          display: "flex",
          gap: "60px",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <section style={{ display: "flex", flexDirection: "column" }}>
          {/* <span style={{ fontSize: '25px' }}>Player 1</span> */}
          <GetUserChoices />
        </section>
        <section>
          <div
            style={{
              display: "flex",
              gap: "50px",
              flexDirection: "column",
              fontSize: "55px",
            }}
          >
            {/* <span style={{ fontSize: '25px' }}>Player 2</span> */}
            {!usersChoice && <span>❓</span>}
            {usersChoice && <span>{choices[computerChoice]}</span>}
          </div>
        </section>
      </div>
      <div style={{ fontSize: "30px", marginBottom: "20px" }}>
        {resultRef.current && `Result: ${resultRef.current}`}
      </div>
      <button
        onClick={() => {
          resetChoices();
        }}
      >
        Next round
      </button>
    </main>
  );
}
