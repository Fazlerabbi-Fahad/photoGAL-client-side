import React from 'react';

const AllReviews = ({ rev, price, name }) => {
    const { reviewer_name, review } = rev;
    return (
        <tbody>
            <tr>

                <div>
                    <div className="font-bold ml-5 mt-5">{reviewer_name}</div>
                </div>

                <td>
                    {name}
                    <br />
                    <span className="badge badge-ghost badge-sm">{price}$</span>
                </td>
                <td>{review}</td>

            </tr>
        </tbody>

    )
};

export default AllReviews;