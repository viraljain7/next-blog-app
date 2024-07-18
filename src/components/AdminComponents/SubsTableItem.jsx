"use client"
import { assets } from '@/Assets/assets'
import React from 'react'

const SubsTableItem = ({ email, date, deleteEmail, mongoId }) => {
    const emailDate = new Date(date);

    return (
        <tr className='bg-white border-b text-left'>
            <th scope='row' className='items-center gap-3  px-6 py-4 font-medium text-gray-900 whitespace-nowrap  '>

                <p>   {email ? email : "No Email"}</p>
            </th>

            <td className='px-6 py-4 hidden sm:block' >
                {emailDate.toDateString()}
            </td>
            <td className='px-6 py-4  cursor-pointer '
                onClick={() => deleteEmail(mongoId)}
            >
                X
            </td>
        </tr>
    )
}

export default SubsTableItem
