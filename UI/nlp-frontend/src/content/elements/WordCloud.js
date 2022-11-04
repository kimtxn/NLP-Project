import React from 'react';
import ReactWordcloud from 'react-wordcloud';
 
const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
  {
    text: 'good',
    value: 17,
  },
  {
    text: 'awesome',
    value: 80,
  },
  {
    text: 'wonderful',
    value: 75,
  },
]
 
export default function WordCloud() {
  return <ReactWordcloud words={words} />
}