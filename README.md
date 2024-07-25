
# Sudoku Solver

This is a web-based Sudoku Solver built with ReactJS. The application allows users to input initial Sudoku values, validate the entries, and solve the Sudoku puzzle if the entries are valid.

## Features

- 9x9 grid for inputting initial Sudoku values (1-9) or leaving cells blank for unknown values.
- "Validate" button to check the validity of the current state of inputs.
- "Solve" button to solve the Sudoku puzzle if the entries are valid.
- Error message display if the initial entries are invalid.
- Display the solved Sudoku puzzle if it is solvable.
- Validation logic that ensures rows, columns, and 3x3 sub-grids contain unique values.
- Implementation of a backtracking algorithm to solve the Sudoku puzzle.

## Demo

You can see the live demo of the Sudoku Solver [here]  https://dhanu9917.github.io/quinx/ .

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Dhanu9917/quinx.git
   cd <your-repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Deployment

The application is deployed to GitHub Pages. Follow the steps below to deploy your own version:

1. Ensure you have a GitHub repository for your project.
2. Add the following to your `package.json` file:
   ```json
   "homepage": "homepage": "https://Dhanu9917.github.io/quinx" ,
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Build and deploy the application:
   ```bash
   npm run build
   npm run deploy
   ```

4. Visit `"homepage":  https://dhanu9917.github.io/quinx/ ` to see your deployed application.

## Technologies Used

- ReactJS
- Styled Components
- GitHub Pages for deployment

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

- This project was inspired by the need to solve Sudoku puzzles programmatically.
- Special thanks to the developers and the community for their valuable contributions and feedback.
