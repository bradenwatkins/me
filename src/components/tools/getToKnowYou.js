import React, { useState } from "react"
import { FiRefreshCw } from "react-icons/fi"
import Button from "../ui/button"

const GetToKnowYou = () => {
  const [questions, setQuestions] = useState(shuffle(allQuestions))

  console.log(questions)

  return (
    <>
    <div className={`w-full flex flex-row justify-between items-start`}>
      <h4>Questions</h4>
        <Button onClick={() => setQuestions(shuffle(allQuestions))}>
          <FiRefreshCw />
        </Button>
      </div>
      {questions?.map(question => (
        <p>{question}</p>
      ))}
    </>
  )
}

export default GetToKnowYou

const shuffle = array => {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array.slice(0, 5)
}

const allQuestions = [
  "What are your hobbies?",
  "Do you collect anything?",
  "What are you passionate about?",
  "What is your most prized possession?",
  "What is the greatest accomplishment of your life?",
  "What is on your bucket list?",
  "What is your favorite recent memory?",
  "What is your best childhood memory?",
  "What is your favorite holiday?",
  "Who knows you best?",
  "What family member are you closest to?",
  "What skill would you most like to learn?",
  "Where is the coolest place you traveled?",
  "What does your average weekend look like?",
  "Tell me about your longest running friendship with someone?",
  "What is your earliest memory?",
  "What makes you unique?",
  "Who is your hero?",
  "Who is the smartest person you ever met?",
  "What is one thing that instantly makes your day better?",
  "When did you first feel like an adult?",
  "Whose opinion do you care most about?",
  "What is the most important decision you have ever made so far?",
  "Aside from necessities, what one thing could you not go a day without?",
  "What do you enjoy spending money on?",
  "What is something that always makes you smile?",
  "What are you most thankful for?",
  "What are you most looking forward to?",
  "What do you wish more people understand about you?",
  "What is the greatest challenge or struggle you have ever faced?",
  "What is the biggest risk you ever took?",
  "Do you have a significant other?",
  "Do you have kids?",
  "Who do you live with?",
  "Where did you grow up?",
  "What is the best place you ever traveled to?",
  "What do you think would most impress your five year old self? Your 15 year old self?",
  "What kind of elderly person do you hope to be?",
  "What is your favorite website?",
  "What is your favorite season?",
  "What book changed your life?",
  "How do you prefer to exercise?",
  "What movie do you wish you could watch again for the first time?",
  "What is one story you love to tell, but rarely get the chance?",
  "What is one question you wish people would ask you more?",
  "What is one question you wish people would ask you less?",
  "What is your favorite song?",
  "What was the first concert you attended? The best concert?",
  "What is your favorite quote?",
  "What is the last book you read?",
  "What is the last TV show you binged watched?",
  "What movie could you quote by heart?",
  "What do you dislike that everyone else seems to like?",
  "What do you like that everyone else seems to dislike?",
  "What makes you happiest?",
  "Have you ever met a celebrity? Which celebrity would you like to meet?",
  "Describe yourself in three words.",
  "What is the best idea you have ever had for a business?",
  "If given the opportunity, what book would you write?",
  "What is the strangest food combination you enjoy?",
  "What is your favorite kind of cuisine?",
  "What is the best meal you have ever eaten?",
  "Do you have any tattoos? If not, are there any tattoos you want?",
  "What are you allergic to?",
  "What is your favorite color?",
  "What is your favorite animal?",
  "Do you have any pets?",
  "Do you have brothers or sisters?",
  "How old are you?",
  "When is your birthday?",
  "What is the farthest you have traveled from home?",
  "What is your favorite summer activity?",
  "What is your favorite winter activity?",
  "What is your favorite food?",
  "If you could choose a new name, which one would it be?",
  "Who is your favorite superhero?",
  "Who is your favorite Disney character?",
  "What is the best vacation you have ever taken?",
  "What is the silliest thing you can imagine?",
  "What are you afraid of?",
  "What is your favorite snack?",
  "What is your favorite story?",
  "What is the bravest thing you ever did?",
  "Who is the best cartoon character?",
  "If you could make one rule for everyone in the world to follow, what would it be?",
  "If you could own any animal as a pet, what would you choose?",
  "What is the coolest thing you ever made?",
  "What is your favorite way to spend an afternoon?",
  "What are you most excited about right now?",
  "What is your favorite sport?",
  "What is your favorite song?",
  "What is your favorite outfit?",
  "If you could redesign your bedroom, what would you add?",
  "What is your favorite toy?",
  "What is your favorite thing to do with your parents?",
  "If you could speak to one deceased person for thirty seconds, who would it be and what would you say?",
  "If you could travel to the past and change one event, would you? Which one? Why?",
  "What is the best advice you haves ever received?",
  "What is the worst advice you have ever received?",
  "For what in your life do you feel most grateful?",
  "If you could change anything about the way your parents raised you, what would it be?",
  "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
  "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",
  "What area of your life would you most like to improve?",
  "If you could switch lives with any one person for one day, who would you choose?",
  "What is your definition of success?",
  "How has your perspective on the world changed over time?",
  "Do you believe that people can change?",
  "Do you believe you will accomplish your dreams?",
  "What was the scariest moment in your life so far?",
  "What is your biggest regret to date?",
  "Whose death hit you hardest?",
  "Do you believe in free will?",
  "Do you believe in destiny?",
  "If you could relive one moment in your life, which would it be?",
  "What is your most cherished belief?",
  "Where do you think we go when we die?",
  "What do you think is the meaning of life?",
  "What was your first job?",
  "Did you go to college? If yes, what college? What was your major?",
  "Do you work better in the morning or at night?",
  "Do you prefer working remotely or in the office?",
  "Do you prefer group work or solo work?",
  "Emails, texts, or phone calls?",
  "How do you take your coffee?",
  "If money were no issue, what would you do with your time?",
  "If you did not work in this industry, what field would you pursue?",
  "Why did you pick this profession?",
  "What motivates you?",
  "What inspires you?",
  "How do you deal with work stress?",
  "You can ban one question from the interview process forever. Which one do you choose?",
  "If you were to start your own business, what kind of company would you create?",
  "Would you rather win the lottery or work at the perfect job? Why?",
  "What’s your favorite way to spend a day off?",
]
