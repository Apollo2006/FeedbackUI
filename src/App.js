import Header from "./components/Header";
import { v4 as uuidv4} from 'uuid';
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id ))
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList 
        feedback={feedback} 
        handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

