import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/main-page/Button";

const people = [
  {
    id: "1",
    name: "Orem Gitonga",
    title: "Contributor",
    organization: "Casbi",
    role: "Admin",
    phone: "0720814519",
    email: "oremgitonga22@gmail.com",
    image: "https://bit.ly/33HnjK0",
  },
  {
    id: "2",
    name: "Rosemary Muchangi",
    title: "Contributor",
    organization: "Gemfund",
    role: "validator",
    phone: "0726018835",
    email: "muchangirosemary@gmail.com",
    image: "https://bit.ly/3I9nL2D",
  },

  // More people...
];

export default function App() {
  return (
    <div className="flex flex-col bg-tertiary">
      <div className="flex justify-between sm:flex-column">
        <h1 className="py-5 ml-3 text-2xl font-bold">Contributors</h1>
        {/* <input type="text" placeholder="Search Contributor..." /> */}
        <Link className="py-5 mr-2" to="/addcontributor">
          <Button text="Add Contributor" size="sm" variant="primary-outline" />
        </Link>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Contributor ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Organization
                  </th>
                  {/* <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={person.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {person.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {person.organization}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.role}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
