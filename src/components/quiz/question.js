import React from 'react'

const QuestionText = ({state, dispatch}) =>
(
  <div className="question-name">
    <h3 className="preface">{state.questions[state.quizPosition].preface ? state.questions[state.quizPosition].preface : ''}</h3>
    <h3>{state.questions[state.quizPosition].text}</h3>
  </div>
)

export default QuestionText
