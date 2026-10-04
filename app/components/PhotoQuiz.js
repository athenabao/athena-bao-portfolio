'use client';

import { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { places } from '../data';

const destinations = [...new Set([...places.map(place => place.name), 'Seattle, USA', 'Rome, Italy', 'Tokyo, Japan'])];
const rounds = places.filter(place => place.photo);

export default function PhotoQuiz() {
  const [round, setRound] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const complete = round >= rounds.length;
  const photo = rounds[round];
  const options = photo ? destinations.filter(name => name !== photo.name).slice(0, 3) : [];
  if (photo) options.splice(round % 4, 0, photo.name);

  function answer(destination) {
    if (selected !== null) return;
    setSelected(destination);
    if (destination === photo.name) setScore(current => current + 1);
  }

  function replay() { setRound(0); setScore(0); setSelected(null); }

  if (!rounds.length) return <p>[TODO] Add travel photos to start the quiz.</p>;
  if (complete) return <div className="quiz-finish" aria-live="polite">
    <span className="section-label">Final score</span><h3>{score} / {rounds.length}</h3>
    <p>{score === rounds.length ? 'You got them all.' : 'Thanks for playing.'}</p>
    <button className="button" onClick={replay}>Play again <RotateCcw size={18} /></button>
  </div>;

  return <div className="quiz-layout">
    <div className="quiz-photo"><img src={photo.photo} alt={`Travel photo for round ${round + 1}`} /></div>
    <div className="quiz-controls">
      <div className="quiz-progress"><span>Round {round + 1} / {rounds.length}</span><span>Score: {score}</span></div>
      <h3>Where was this taken?</h3>
      <div className="quiz-options">{options.map(destination => {
        const correct = selected !== null && destination === photo.name;
        const incorrect = selected === destination && destination !== photo.name;
        return <button key={destination} type="button" disabled={selected !== null} onClick={() => answer(destination)} className={`quiz-option${correct ? ' correct' : ''}${incorrect ? ' incorrect' : ''}`}>
          {destination}{correct && <span>Correct</span>}{incorrect && <span>Your answer</span>}
        </button>;
      })}</div>
      <p className="quiz-feedback" role="status">{selected === null ? '' : selected === photo.name ? `Correct. ${photo.caption}` : `This is ${photo.name}. ${photo.caption}`}</p>
      {selected !== null && <button className="button" onClick={() => { setRound(current => current + 1); setSelected(null); }}>{round === rounds.length - 1 ? 'See final score' : 'Next photo'} <ArrowRight size={18} /></button>}
    </div>
  </div>;
}
