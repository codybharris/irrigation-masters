import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiUpload } from 'react-icons/hi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    newCustomer: 'no',
    serviceTypes: [] as string[],
    issueLocation: '',
    issueDescription: '',
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const serviceOptions = [
    'Residential Irrigation',
    'Commercial Irrigation',
    'Control Unit Repair/Replacement',
    'Sprinkler Head Repair',
    'Spray Pattern Adjustment',
    'Valve Location',
    'Backflow Test',
    'Winterization',
    'Exterior Lighting',
    'Emergency Service',
    'Not Sure',
    'Other',
  ];

  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceTypeChange = (serviceType: string) => {
    setFormData(prev => ({
      ...prev,
      serviceTypes: prev.serviceTypes.includes(serviceType)
        ? prev.serviceTypes.filter(s => s !== serviceType)
        : [...prev.serviceTypes, serviceType]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form data:', formData);
    console.log('Files:', selectedFiles);
    alert('Form submitted! (Note: Backend integration needed)');
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
    >
      {/* Name */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
          />
        </div>
      </div>

      {/* Address */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Address <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          <input
            type="text"
            name="addressLine1"
            placeholder="Address Line 1"
            required
            value={formData.addressLine1}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
          />
          <input
            type="text"
            name="addressLine2"
            placeholder="Address Line 2"
            value={formData.addressLine2}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            />
            <select
              name="state"
              required
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-white"
            >
              <option value="">State</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              required
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            />
          </div>
        </div>
      </div>

      {/* Phone and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
          />
        </div>
      </div>

      {/* New Customer */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Are you a new customer?
        </label>
        <div className="flex gap-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="newCustomer"
              value="yes"
              checked={formData.newCustomer === 'yes'}
              onChange={handleInputChange}
              className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
            />
            <span className="ml-2 text-gray-700">Yes</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="newCustomer"
              value="no"
              checked={formData.newCustomer === 'no'}
              onChange={handleInputChange}
              className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
            />
            <span className="ml-2 text-gray-700">No</span>
          </label>
        </div>
      </div>

      {/* Service Type */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          What type of service are you requesting? <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {serviceOptions.map((service) => (
            <label key={service} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.serviceTypes.includes(service)}
                onChange={() => handleServiceTypeChange(service)}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <span className="ml-2 text-gray-700 text-sm">{service}</span>
            </label>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">Choose all that apply.</p>
      </div>

      {/* Issue Location */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Where on the property is the issue located? <span className="text-red-500">*</span>
        </label>
        <textarea
          name="issueLocation"
          required
          value={formData.issueLocation}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition resize-none"
        />
      </div>

      {/* Issue Description */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Please describe the issue you are having <span className="text-red-500">*</span>
        </label>
        <textarea
          name="issueDescription"
          required
          value={formData.issueDescription}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition resize-none"
        />
      </div>

      {/* File Upload */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Upload any relevant images
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <HiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <span className="text-green-600 font-medium">Upload</span>
            <span className="text-gray-600"> or drag files here.</span>
          </label>
          {selectedFiles.length > 0 && (
            <div className="mt-4 text-left">
              <p className="text-sm font-medium text-gray-700 mb-2">Selected files:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {selectedFiles.map((file, index) => (
                  <li key={index}>- {file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-800 transition-colors shadow-lg"
      >
        Submit Request
      </motion.button>
    </motion.form>
  );
}
