import { ChevronDoubleRightIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import { usePage } from "@inertiajs/react";
import { useSelector } from "react-redux";

export default function BranchBreadCrumbsComponent() {
  const { url } = usePage();
  const branchid = url.split("/")[3];
  const path = url.split("/")[4];
  const { branches } = useSelector((state) => state.app);
  
  const branch = branches.find(res=>res.id == branchid)

  return ( 
      <nav className="flex px-5 py-3 my-3  border border-gray-200 rounded-lg bg-red-500 " aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-red-300">
              <HomeModernIcon className="h-6 mr-2" />
              Administrator
            </a>
          </li>
          <li>
            <div className="flex items-center text-white">
            <ChevronDoubleRightIcon className="h-6" />
              <a href="#" className="ms-1 text-sm font-medium text-white hover:text-red-300 md:ms-2">{branch?.branch_name}</a>
            </div>
          </li>
          <li>
            <div className="flex items-center text-white">
            <ChevronDoubleRightIcon className="h-6" />
              <a href="#" className="ms-1 text-sm font-medium capitalize text-white hover:text-red-300 md:ms-2">{path.replace(/_/g,' ')}</a>
            </div>
          </li>
        </ol>
      </nav>
   );
}

