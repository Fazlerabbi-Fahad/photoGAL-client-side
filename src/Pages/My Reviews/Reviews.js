import { data } from 'autoprefixer';
import React from 'react';

const Reviews = ({ rev, handleDeleteAll }) => {
    const { _id, name, price, review, serviceName } = rev;



    return (
        <tbody>

            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDeleteAll(_id)}>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {serviceName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{price}</span>
                </td>
                <td>{review}</td>
                {/* <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th> */}
            </tr>
        </tbody >
    );
};

export default Reviews;