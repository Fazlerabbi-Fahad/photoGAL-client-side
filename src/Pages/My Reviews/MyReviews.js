import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Reviews from './Reviews';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch('https://photogal-server.vercel.app/reviews',)
            // .then(res => {
            //     if (res.status === 401 || res.status === 403) {
            //         logOut();
            //     }
            //     return res.json()
            // })
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.log(err))

    }, [])

    const handleDeleteAll = (id) => {

        fetch(`https://photogal-server.vercel.app/reviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Successfully deleted this service');
                    const remaining = reviews.filter(rev => rev._id !== id);
                    setReviews(remaining);
                }
            })

    }
    return (
        <div>
            <h1 className='text-5xl text-center text-red-400 font-bold my-20'>You make {reviews.length} reviews</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        reviews.map(review => <Reviews
                            key={review._id}
                            rev={review}
                            handleDeleteAll={handleDeleteAll}
                        ></Reviews>)
                    }

                </table>
            </div>
        </div>
    );
};

export default MyReviews;