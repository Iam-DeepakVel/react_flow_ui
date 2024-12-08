import React from 'react'

const Heading = ({ icon: Icon, title, subTitle }) => {
  return (
    <div className="flex items-start gap-4 mb-12">
      <div className="inline-flex items-center justify-center p-4 rounded-md bg-purple-200">
        <Icon size={30} className="text-purple-800" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-700">{subTitle}</p>
      </div>
    </div>
  )
}

export default Heading