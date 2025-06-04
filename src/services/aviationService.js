import axios from 'axios';

const BASE_URL = 'https://api.aviationstack.com/v1';

// Debug log to check if the API key is loaded
console.log('API Key loaded:', import.meta.env.VITE_AVIATION_API_KEY ? 'Yes' : 'No');

export const aviationService = {
    // Get real-time flights
    getRealTimeFlights: async (params = {}) => {
        try {
            console.log('Attempting API call with key:', import.meta.env.VITE_AVIATION_API_KEY?.substring(0, 5) + '...');
            const response = await axios.get(`${BASE_URL}/flights`, {
                params: {
                    access_key: import.meta.env.VITE_AVIATION_API_KEY,
                    ...params
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error details:', {
                status: error.response?.status,
                statusText: error.response?.statusText,
                message: error.response?.data?.message || error.message,
                url: error.config?.url
            });
            throw error;
        }
    },

    // Get flight by flight number
    getFlightByNumber: async (flight_number) => {
        try {
            const response = await axios.get(`${BASE_URL}/flights`, {
                params: {
                    access_key: import.meta.env.VITE_AVIATION_API_KEY,
                    flight_number
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching flight:', error);
            throw error;
        }
    },

    // Get flights by airline
    getFlightsByAirline: async (airline_name) => {
        try {
            const response = await axios.get(`${BASE_URL}/flights`, {
                params: {
                    access_key: import.meta.env.VITE_AVIATION_API_KEY,
                    airline_name
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching airline flights:', error);
            throw error;
        }
    },

    // Get flights by route (departure and arrival)
    getFlightsByRoute: async (dep_iata, arr_iata) => {
        try {
            const response = await axios.get(`${BASE_URL}/flights`, {
                params: {
                    access_key: import.meta.env.VITE_AVIATION_API_KEY,
                    dep_iata,
                    arr_iata
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching route flights:', error);
            throw error;
        }
    }
}; 