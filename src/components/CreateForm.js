'use client';
import axios from 'axios';

function CreateForm({ onCreate }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      location: event.target.location.value,
      minimum_customers_per_hour: event.target.minCustomers.value,
      maximum_customers_per_hour: event.target.maxCustomers.value,
      average_cookies_per_sale: event.target.avgCookies.value,
      description: "",
      owner: null,
    };
  
    try {
      const response = await axios.post('https://cookiestandapi3.azurewebsites.net/api/CookieStands', formData);
      console.log(response.data);
  
      // Call the onCreate function with the new cookie stand
      onCreate(response.data);
    } catch (error) {
      console.error('Error creating cookie stand:', error);
    }
  };
  

    return (
      <div className="flex items-center bg-red-100 justify-center my-4 ">
        <form onSubmit={handleSubmit} className="space-y-4 w-3/4 bg-red-300 text-red-800">
          <h2 className="text-center mb-4">Create Cookie Stand</h2>
          <div className="flex flex-col mb-4 w-3/5 mx-auto">
            <label htmlFor="location" className="mb-2">Location</label>
            <input type="text" id="location"  className="p-2 border border-gray-300 rounded" required/>
          </div>
          <div className="flex space-x-4 mb-4 items-end w-3/5 mx-auto">
            <div className="flex flex-col">
              <label htmlFor="minCustomers" className="mb-2">Minimum Customers Per Hour</label>
              <input type="number" id="minCustomers"  className="p-2 border border-gray-300 rounded" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="maxCustomers" className="mb-2">Maximum Customers Per Hour</label>
              <input type="number" id="maxCustomers"  className="p-2 border border-gray-300 rounded" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="avgCookies" className="mb-2">Average Cookies Per Sale</label>
              <input type="number" id="avgCookies"  className="p-2 border border-gray-300 rounded" required/>
            </div>
            <button type='submit' className='px-4 py-2 bg-red-900 text-white rounded hover:bg-red-700'>Create</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default CreateForm;
  