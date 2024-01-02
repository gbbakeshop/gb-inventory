import AccountTableHeader from "./account-table-header";
import DeleteAccount from "./delete-account";
import UpdateAccount from "./update-account";

export default function AccountTable({ accounts,branches }) {

  

  return (
      <>
      <AccountTableHeader />
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-1 min-h-[78vh]">
              <table className="w-full border-collapse text-left text-sm text-gray-500">
                  <thead className="bg-gray-50">
                      <tr>
                          <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                          >
                              Name
                          </th>

                          <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                          >
                              Position
                          </th>
                          <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                          >
                              Branch
                          </th>
                          <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                          >
                              Status
                          </th>
                          <th
                              scope="col"
                              className="px-6 py-4 font-medium text-gray-900"
                          ></th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                      {accounts.map((res, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                  {/* <div className="relative h-10 w-10">
                                      <img
                                          className="h-full w-full rounded-full object-cover object-center"
                                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                          alt=""
                                      />
                                      <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                  </div> */}
                                  <div className="text-sm">
                                      <div className="font-medium text-gray-700">
                                          {res.name}
                                      </div>
                                      <div className="text-gray-400">
                                          {res.email}
                                      </div>
                                  </div>
                              </th>
                              <td className="px-6 py-4">
                                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                                      {res.position}
                                  </span>
                              </td>
                              <td className="px-6 py-4">
                                  {res.branch.branch_name}
                              </td>
                              <td className="px-6 py-4">
                                  <div className="flex gap-2">
                                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                          <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                          Active
                                      </span>
                                  </div>
                              </td>
                              <td className="px-6 py-4">
                                  <div className="flex justify-end gap-4">
                                     <DeleteAccount id={res.id}/>
                                    <UpdateAccount 
                                    branches={branches}
                                    data={res}/>
                                  </div>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </>
  );
}
