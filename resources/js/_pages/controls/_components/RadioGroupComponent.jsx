import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CakeIcon, ClipboardDocumentCheckIcon, ShoppingBagIcon, TruckIcon } from '@heroicons/react/24/outline'
import { Link, usePage } from '@inertiajs/react'
const plans = [
  
  {
    name: 'Breads',
    path:'breads',
    icon:<CakeIcon className='h-6'/>,
    href:route('controls.bread')
  },
  {
    name: 'Raw Materials',
    path:'raw_materials',
    icon:<TruckIcon className='h-6'/>,
    href:route('controls.raw_materials')
  },
  {
    name: 'Recipes',
    path:'recipes',
    icon:<ClipboardDocumentCheckIcon className='h-6'/>,
    href:route('controls.recipes')
  },
  {
    name: 'Selecta',
    path:'selecta',
    icon:<ShoppingBagIcon className='h-6'/>,
    href:route('controls.selecta')
  },
]

export default function RadioGroupComponent() {
  const [selected, setSelected] = useState(plans[0])
  const { url } = usePage();
  const path = url.split("/")[3];

  return (
    <div className="w-full px-2">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan,index) => (
              <Link key={index} href={plan.href}>
                <div  className='my-2'>
                  <RadioGroup.Option
                    key={plan.name}
                    value={plan}
                    className={({ active, checked }) =>
                      `${
                        plan.path == path
                          ? ' ring-red-300'
                          : ''
                      }
                      ${plan.path == path ? 'bg-red-500 text-white' : 'bg-white'}
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
                                  plan.path == path ? 'text-white' : 'text-red-500'
                                }`}
                              >
                                {plan.name}
                              </RadioGroup.Label>
                            </div>
                          </div>
                          <div className={`shrink-0 ${plan.path == path?'text-white':'text-red-500'}`}>
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
  )
}


