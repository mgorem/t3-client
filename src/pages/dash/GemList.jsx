import { Link } from "react-router-dom";
import Button from "../../components/main-page/Button";

const gems = [
  {
    id: "TT-0001-AWE",
    type: "",
    size: "",
    weight: "",
    species: "",
    variety: "",
    hue: "",
    tone: "",
    intensity: "",
    contributorId: "",
  },
  {
    id: "TT-0002-AWE",
    type: "",
    size: "",
    weight: "",
    species: "",
    variety: "",
    hue: "",
    tone: "",
    intensity: "",
    contributorId: "",
  },
  {
    id: "TT-0003-AWE",
    type: "",
    size: "",
    weight: "",
    species: "",
    variety: "",
    hue: "",
    tone: "",
    intensity: "",
    contributorId: "",
    gem_pic: "",
  },
  {
    id: "TT-0004-AWE",
    type: "",
    size: "",
    weight: "",
    species: "",
    variety: "",
    hue: "",
    tone: "",
    intensity: "",
    contributorId: "",
    gem_pic: "",
  },
  {
    id: "TT-0005-AWE",
    type: "",
    size: "",
    weight: "",
    species: "",
    variety: "",
    hue: "",
    tone: "",
    intensity: "",
    contributorId: "",
    gem_pic: "",
  },

  // More people...
];

const GemList = () => {
  return (
    <div className="flex flex-col bg-tertiary">
      <div className="flex justify-between sm:flex-column">
        <h1 className="py-5 ml-3 text-2xl font-bold">Gems</h1>
        {/* <input type="text" placeholder="Search Contributor..." /> */}
        <Link className="py-5 mr-2" to="/addgem">
          <Button text="Add Gem" size="sm" variant="primary-outline" />
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
                    Gem ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Size
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Weight
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Species
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Variety
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Hue
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Intensity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Contributor ID
                  </th>
                  {/* <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {gems.map((gem) => (
                  <tr key={gem.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {gem.id}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={gem.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {gem.type}
                          </div>
                        </div>
                      </div>
                    </td> */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{gem.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{gem.size}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {gem.weight}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {gem.species}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {gem.variety}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {gem.hue}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {gem.tone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {gem.intensity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {gem.contributorId}
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
};
export default GemList;
