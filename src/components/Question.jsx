import React from "react";
import { useId } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

function QuestionTitle({ text }) {
    return (
        <b className="title">
            {text}
            </b>
  );
}

function QuestionDescription({ text }) {
    return (
        <p className="description">
            {text}
            </p>
    );
}

function TextQuestionBody() {
    return (
        <input type="text"></input>
    ) 
}

function CodeQuestionBody() {
    return (
        <CodeMirror 
        height="350px" 
        extensions={[python()]}
        options={
            {"highlightActiveLine": false}
        }
        className="CodeMirror"
        ></CodeMirror>
    ); 
}

function ChooseQuestionVariant({ text, type, name }) {
    const id = useId();
    return (
        <div className="variant">
            <input type={ type } id={ id } name={ name }></input>
            <label htmlFor={ id }>{ text }</label>
        </div>
    )
}

function ChooseQuestionBody({ type, variants }) {
    const rows = [];
    const name = useId();
    variants.forEach(variant => {
        rows.push(
            <ChooseQuestionVariant text={ variant } type={ type } key={ variant } name={ name }>
            </ChooseQuestionVariant>
        );
    });
    return (
        <div className="variants">
            { rows }
        </div>
    );
}

function RadioQuestionBody({ variants }) {
    return (
        <ChooseQuestionBody type="radio" variants={ variants }></ChooseQuestionBody>
    )
}

function CheckQuestionBody({ variants }) {
    return (
        <ChooseQuestionBody type="checkbox" variants={ variants }></ChooseQuestionBody>
    )
}

function QuestionBody({ type, variants }) {
    const questionBodies = {
        "text": TextQuestionBody,
        "code": CodeQuestionBody,
        "radio": RadioQuestionBody,
        "check": CheckQuestionBody
    };
    const Body = questionBodies[type];
    return (
        <div className="question-body">
            <Body variants={ variants }></Body>
        </div>
    )
}

export default function Question({ question }) {
    const questionClasses = {
        "text": "question text",
        "code": "question code", 
        "radio": "question choose one",
        "check": "question choose many"
    };
    const questionClass = questionClasses[question.type];
    return (
        <div className={ questionClass }>
            <QuestionTitle text={ question.title }></QuestionTitle>
            <QuestionDescription text={ question.description }></QuestionDescription>
            <QuestionBody type={ question.type } variants={ question.variants }></QuestionBody>
        </div>
    )
}
