import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';


const Admin = ({ history }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/api/userlist`)
      .then((res) => {
        console.log(res)
        setUsers(res.data.users)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        toast.error(`Error To Your Information`);

      });

  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div
          className="mt-48 animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"
        ></div>
      </div>
    )
  }

  if (!users) {
    return <div className='mt-48 bg-green-500'>No Result</div>
  }

  if (users) {
    return (
      <>

        <div className="mt-6 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        date of birth
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sexe
                      </th>
                    </tr>
                  </thead>

                  {
                    users && users.map((o, index) => (
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src="users.png" alt="" />
                              </div>
                              <div className="ml-4">
                                <div key={index} className="text-sm font-medium text-gray-900">
                                  {o.firstname}  {o.lastname}
                                </div>
                                <div className="text-sm text-green-500">
                                  {o.email}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap">

                            <div className="text-sm text-gray-900"></div>
                            <div className="text-sm text-gray-500">{o.date_naissance}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {o.sexe}
                          </td>
                        </tr>

                      </tbody>
                       ))
        }
                    </table>
              </div>

              <div className='my-12 border-b text-center'>

              </div>

            </div>
          </div>
        </div>

       
        <div className='flex flex-col items-center'>
          <a className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
            href='/'
            target='_self'
          >
            <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
            <span className='ml-4'>Home</span>
          </a>

        </div>
      </>

    );
  };
}


export default Admin;
