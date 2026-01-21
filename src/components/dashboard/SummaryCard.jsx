import React from 'react';

const SummaryCard = ({ title, value, icon, color }) => {
    const colorClasses = {
        blue: 'bg-blue-100 text-blue-600',
        green: 'bg-green-100 text-green-600',
        red: 'bg-red-100 text-red-600',
        yellow: 'bg-yellow-100 text-yellow-600',
        purple: 'bg-purple-100 text-purple-600',
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6 flex items-center">
            <div className={`p-4 rounded-full ${colorClasses[color] || 'bg-gray-100 text-gray-600'} mr-4`}>
                {icon}
            </div>
            <div>
                <h4 className="text-sm font-medium text-gray-500">{title}</h4>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );
};

export default SummaryCard;
