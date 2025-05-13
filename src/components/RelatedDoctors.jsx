import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({ speciality, docId }) => {

    const [feedbacks, setFeedbacks] = useState([]);
    const [avgRatings, setAvgRatings] = useState({});
    const navigate = useNavigate()
    const { doctors ,backendUrl,token} = useContext(AppContext)

    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    }, [doctors, speciality, docId])

    useEffect(() => {
        const fetchFeedbacks = async () => {
          try {
            const { data } = await axios.get(backendUrl + '/api/user/all-feedbacks', {
              headers: { token }
            });
    
            if (data.success && Array.isArray(data.feedbacks)) {
              const feedbackList = data.feedbacks;
              setFeedbacks(feedbackList);
    
              // Step 1: Group feedbacks by doctor ID
              const grouped = {};
    
              feedbackList.forEach(fb => {
                const docId = fb.docData?._id;
                if (!docId) return;
    
                if (!grouped[docId]) {
                  grouped[docId] = { total: fb.rating, count: 1 };
                } else {
                  grouped[docId].total += fb.rating;
                  grouped[docId].count += 1;
                }
              });
    
              // Step 2: Compute averages
              const avg = {};
              Object.keys(grouped).forEach(docId => {
                avg[docId] = (grouped[docId].total / grouped[docId].count).toFixed(1);
              });
    
              setAvgRatings(avg);
            } else {
              console.warn("❌ Invalid feedback data", data);
            }
          } catch (err) {
            console.error("❌ Failed to fetch feedbacks:", err);
          }
        };
    
        fetchFeedbacks();
      }, [backendUrl]);

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900'>
            <h1 className='text-3xl font-medium'>Related Doctors</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full grid grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relDoc.map((item, index) => (
                    <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                        <img className='bg-blue-100' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                                <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? 'Available' : "Not Available"}</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                            {/* ⭐ Show average rating as stars */}
                            {avgRatings[item._id] ? (
                                <div className="mt-2 text-yellow-500 text-sm font-medium">
                                    {"★".repeat(Math.round(avgRatings[item._id])) + "☆".repeat(5 - Math.round(avgRatings[item._id]))}
                                    <span className="text-gray-600 ml-1">({avgRatings[item._id]})</span>
                                </div>
                            ) : (
                                <div className="mt-2 text-gray-400 text-sm italic">No ratings yet</div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* <button className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'>more</button> */}
        </div>
    )
}

export default RelatedDoctors