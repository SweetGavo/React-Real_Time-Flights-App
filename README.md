# Real-Time Flights Tracking Application

A modern React application that provides real-time flight tracking information using the OpenSky Network API. Built with Vite for optimal development experience and performance.

## Features

- Real-time flight tracking data
- Interactive flight information display
- Clean and modern user interface
- Responsive design
- Environment variable configuration
- No API key required (uses OpenSky Network's free API)

## Technologies Used

- React 18
- Vite
- OpenSky Network API
- CSS for styling
- Environment Variables for configuration

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd React-Real-Time-Flights-App
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
touch .env
```

4. Add the following environment variables to your `.env` file:
```
VITE_API_BASE_URL=https://opensky-network.org/api
```

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

To build for production:

```bash
npm run build
```

## Project Structure

```
React-Real-Time-Flights-App/
├── src/
│   ├── components/
│   │   ├── Flights.jsx
│   │   └── Navbar.jsx
│   ├── services/
│   │   └── aviationService.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── .env
├── .gitignore
├── package.json
└── README.md
```

## API Information

This application uses the OpenSky Network API to fetch real-time flight data. The API is free to use and doesn't require authentication for basic queries.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
