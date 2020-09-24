// import React, { useState, useEffect } from "react";
// import { ScoreList } from "../styled/HighScoreStyles.js";
// const HighScores = () => {
//   const [highScores, setHighScores] = useState([]);

//   useEffect(() => {
//     const loadHighScores = async () => {
//       //
//       try {
//         const res = await fetch("/.netlify/functions/getHighScores");
//         const scores = await res.json();
//         console.log(scores);
//         setHighScores(scores);
//         console.log(scores);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     loadHighScores();
//   }, []);

//   return (
//     <div>
//       <h2>High Scores</h2>
//       {highScores.map((score) => {
//         return (
//           <ScoreList
//             key={score.id}
//           >{`Name: ${score.fields.name} - Score: ${score.fields.score}`}</ScoreList>
//         );
//       })}
//     </div>
//   );
// };

// export default HighScores;
import React, { useState, useEffect } from "react";
import { ScoreList } from "../styled/HighScoreStyles.js";

export default function HighScores() {
  //display those scores
  const [highScores, setHighScores] = useState([]);

  //use the fetch API to call getHighScores function
  useEffect(() => {
    const loadHighScores = async () => {
      try {
        const res = await fetch("/.netlify/functions/getHighScores");
        const scores = await res.json();
        setHighScores(scores);
      } catch (err) {
        console.error(err);
      }
    };
    loadHighScores();
  }, []);
  return (
    <div>
      <h1>High Scores</h1>
      {highScores.map((score, index) => (
        <ScoreList key={score.id}>
          {index + 1}. {score.fields.name} - {score.fields.score}
        </ScoreList>
      ))}
    </div>
  );
}
