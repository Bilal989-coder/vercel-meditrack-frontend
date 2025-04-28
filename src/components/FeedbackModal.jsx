import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FeedbackModal = ({ appointmentId }) => {
  const { backendUrl, token, getDoctosData } = useContext(AppContext);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.warning('Login to submit feedback.');
      return navigate('/login');
    }

    try {
      const { data } = await axios.post(
        backendUrl + '/api/user/submit',
        { appointmentId, feedback, rating },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getDoctosData();
        navigate('/my-appointments');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Give Your Feedback</h2>

      <textarea
        className="w-full p-2 border rounded mb-4"
        placeholder="Write your feedback..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      />

      <select
        className="w-full p-2 border rounded mb-4"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        <option value={5}>5 - Excellent</option>
        <option value={4}>4 - Good</option>
        <option value={3}>3 - Average</option>
        <option value={2}>2 - Poor</option>
        <option value={1}>1 - Very Poor</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackModal;
