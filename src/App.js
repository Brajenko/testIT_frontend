import React from "react";
import Question from "./components/Question";
import "./styles/App.css"

function App() {
  const questions = [
    {
      id: 0,
      type: "text",
      title: "Вопрос 1",
      description: "Описание 1",
      variants: []
    },
    {
      id: 1,
      type: "check",
      title: "Вопрос 2",
      description: "Описание 2",
      variants: ["Вариант1", "Вариант2", "Вариант3", "Вариант4"]
    },
    {
      id: 2,
      type: "radio",
      title: "Вопрос 3",
      description: "Описание 3",
      variants: ["Вариант1", "Вариант2", "Вариант3", "Вариант4"]
    },
    {
      id: 3,
      type: "code",
      title: "Вопрос 4",
      description: "Описание 4",
      // variants: []
    },
  ];
  const questionsToRender = [];
  questions.forEach(function (question) {
    questionsToRender.push(
      <Question question={ question } key={ question.id }></Question>
    )
  })
  const answers = [
    {
      id: 0,
      answer: "sdfsdfsdf"
    },
    {
      id: 1,
      answer: "no answer",
    },
    {
      id: 2,
      answer: "no answer",
    },
    {
      id: 3,
      answer: "for x in range(123):\n\tprint(123)"
    }
  ]
  return (
    <div className="App">
      <div className="questions">
        { questionsToRender }
      </div>
    </div>
  );
}

export default App;
