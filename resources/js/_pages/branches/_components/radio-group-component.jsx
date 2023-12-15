import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import {
  BanknotesIcon,
  CakeIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  PresentationChartBarIcon,
  ShoppingBagIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/react";

export default function BranchRadioGroupComponent({ branchid }) {
  const { url } = usePage();
  const path = url.split("/")[4];
  const branchidPath = url.split("/")[3];

  const plans = [
    {
      name: "Analytics",
      path: "analytics",
      icon: <PresentationChartBarIcon className="h-6" />,
      href: route("branches.analytics", [branchid]),
    },

    {
      name: "Expenses",
      path: "expenses",
      icon: <BanknotesIcon className="h-6" />,
      href: route("branches.expenses", [branchid]),
    },
    {
      name: "Raw Materials",
      path: "raw_materials",
      icon: <TruckIcon className="h-6" />,
      href: route("branches.raw_materials", [branchid]),
    },
    {
      name: "Production",
      path: "production",
      icon: <CakeIcon className="h-6" />,
      href: route("branches.production", [branchid]),
    },
    {
      name: "Selecta",
      path: "selecta",
      icon: <ClipboardDocumentCheckIcon className="h-6" />,
      href: route("branches.selecta", [branchid]),
    },
    {
      name: "Accounts",
      path: "accounts",
      icon: <UserGroupIcon className="h-6" />,
      href: route("branches.accounts", [branchid]),
    },
    {
      name: "Attendance",
      path: "attendance",
      icon: <CalendarDaysIcon className="h-6" />,
      href: route("branches.attendance", [branchid]),
    },
  ];

  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="w-full ">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <div className="space-y-2">
            {plans.map((plan, index) => (
              <Link key={index} href={plan.href}>
                <div className="my-2">
                  <RadioGroup.Option
                    key={plan.name}
                    value={plan}
                    className={({ active, checked }) =>
                      `${
                        plan.path == path && branchidPath == branchid
                          ? " ring-red-300"
                          : ""
                      }
                      ${
                        plan.path == path && branchidPath == branchid
                          ? "bg-red-500 text-white"
                          : "bg-white"
                      }
                      relative flex cursor-pointer border-2 border-red-300 rounded-lg px-5 py-3 shadow-md focus:outline-none`
                    }
                  >
                    <>
                      <div className="flex h-full w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                plan.path == path && branchidPath == branchid
                                  ? "text-white"
                                  : "text-red-500"
                              }`}
                            >
                             {plan.name}
                            </RadioGroup.Label>
                          </div>
                        </div>
                        <div
                          className={`shrink-0 ${
                            plan.path == path && branchidPath == branchid
                              ? "text-white"
                              : "text-red-500"
                          }`}
                        >
                          {plan.icon}
                        </div>
                      </div>
                    </>
                  </RadioGroup.Option>
                </div>
              </Link>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
