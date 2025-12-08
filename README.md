# Movie Maniac

A modern React application that serves as your ultimate movie destination, featuring movie listings with filtering and sorting capabilities.

## Features

### Movie Discovery

- **Latest Movies**: Browse the newest releases
- **Popular Movies**: Discover trending films
- **Top Rated Movies**: Find highly acclaimed movies

### Advanced Filtering & Sorting

- **Star Rating Filters**: Filter movies by minimum rating (8+, 7+, 6+ stars)
- **Sorting Options**:
  - Sort by release date
  - Sort by rating
  - Ascending and descending order

### Movie Information Display

- Movie posters
- Movie titles
- Release dates
- Star ratings
- Brief descriptions

## Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: CSS
- **Code Quality**: ESLint
- **Package Manager**: npm

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd movie_maniac
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Navigation

Use the header navigation to browse different movie categories:

- **Latest Movies**: View recently released films
- **Popular**: See trending movies
- **Top Rated**: Browse highly rated movies

### Filtering Movies

- Click on star rating filters (8+, 7+, 6+) to show movies with minimum ratings
- Use the sorting dropdowns to organize movies by date or rating
- Choose ascending or descending order for sorting

### Viewing Movie Details

- Each movie card displays:
  - Movie poster image
  - Movie title
  - Release date
  - Star rating
  - Brief plot description

## Project Structure

```
movie_maniac/
├── public/
│   └── investment-calculator-logo.png
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── Header.jsx          # Navigation component
│   │   ├── MovieCard.jsx       # Individual movie display
│   │   └── MovieList.jsx       # Movie list with filters
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles
│   └── index.jsx               # App entry point
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## Development

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Code Style

This project uses ESLint for code linting. Make sure to run `npm run lint` before committing changes.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Add movie search functionality
- [ ] Implement user authentication
- [ ] Add movie details pages
- [ ] Integrate with movie database APIs
- [ ] Add user ratings and reviews
- [ ] Implement watchlist functionality

## License

This project is licensed under the MIT License.
