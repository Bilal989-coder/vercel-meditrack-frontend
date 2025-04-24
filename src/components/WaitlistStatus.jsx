import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WaitlistStatus = ({ doctorId, date, userId }) => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!doctorId || !date || !userId) return;

    const fetchStatus = async () => {
      try {
        const res = await axios.get('/api/waitlist-status', {
          params: { doctorId, date, userId }
        });
        setStatus(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStatus();
  }, [doctorId, date, userId]);

  if (!status) return null;

  return (
    <div style={{ marginTop: '10px' }}>
      {status.inWaitlist ? (
        <p>You are in the waitlist. Position: {status.position} of {status.totalInWaitlist}</p>
      ) : (
        <p>You are not on the waitlist for this date.</p>
      )}
    </div>
  );
};

export default WaitlistStatus;