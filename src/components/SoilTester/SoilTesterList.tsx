import React, { useState } from 'react';
import { useSoilTesterStore } from '../../store/soil-tester-store';
import { Activity, Droplets, Thermometer, Plus, TestTube } from 'lucide-react';
import DashboardLayout from '../Layout/DashboardLayout';
import CreateSoilTester from './CreateSoilTester';
import StatCard from '../Dashboard/StatCard';
import Thumb from '../../assets/missing-data-vector-49849220-removebg-preview.png'

const SoilTesterList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const soilTesters = useSoilTesterStore((state) => state.soilTesters);
  const updateSoilTester = useSoilTesterStore((state) => state.updateSoilTester);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6 mt-4">
          <h2 className="text-2xl font-semibold">Soil Tests</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <Plus className="w-4 h-4" />
            Request Test
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6 mt-4">
          <StatCard
            title="Pending"
            value={125}
            unit="Tons"
            percentage={100}
            icon={TestTube}
            color="bg-yellow-500"
          />
          <StatCard
            title="Ongoing"
            value={980}
            unit="Tons"
            percentage={85}
            icon={TestTube}
            color="bg-blue-500"
          />
          <StatCard
            title="Completed"
            value={37}
            unit="%"
            percentage={37}
            icon={TestTube}
            color="bg-green-500"
          />
          <StatCard
            title="Total"
            value={37}
            unit="%"
            percentage={37}
            icon={TestTube}
            color="bg-black"
          />
        </div>
        
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Farm name
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Farm Comment
                </th>
                <th scope="col" className="px-6 py-3">
                    Tester comment
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="text">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                {/* <select
                  value={tester.status}
                  onChange={(e) => updateSoilTester(tester.id, e.target.value as any)}
                  className={`text-sm rounded-full px-3 py-1 ${getStatusColor(tester.status)}`}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="maintenance">Maintenance</option>
                </select> */}

                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>



        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-6">Add New Soil Tester</h2>
              <CreateSoilTester onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SoilTesterList;