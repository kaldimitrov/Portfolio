# Portfolio

[![Demo](https://i.imgur.com/k9d4QcH.jpg)](https://i.imgur.com/k9d4QcH.jpg)

Welcome to my personal portfolio! This project is a vibrant showcase of my frontend skills and projects, crafted with the latest web technologies. At its core, the portfolio is built using Svelte, a revolutionary framework for building reactive web applications with minimal code. Svelte's innovative approach allows for a highly efficient and smooth user experience.

To enhance the visual appeal and responsiveness of the portfolio, I've integrated TailwindCSS, a utility-first CSS framework. TailwindCSS provides a flexible and easy-to-use system for styling, enabling a sleek, modern design that adapts seamlessly across different devices and screen sizes.

Further elevating the user interface, I've utilized DaisyUI, a plugin for TailwindCSS that adds beautifully designed components and layouts. DaisyUI's extensive component library has allowed me to create a cohesive and aesthetically pleasing design language throughout the portfolio, making the browsing experience both engaging and intuitive.

This combination of Svelte, TailwindCSS, and DaisyUI represents a harmonious blend of performance, style, and usability, ensuring that my portfolio not only showcases my work effectively but also stands as a testament to my commitment to cutting-edge web development practices.

## Installation Guide

This section provides detailed instructions on how to set up and build the portfolio project for both development and production environments.

### Development Mode

To get started with development mode, follow these steps:

1. **Clone the Repository**: First, clone the repository to your local machine using Git:

   ```bash
   git clone git@github.com:kaldimitrov/Portfolio.git
   cd Portfolio
   ```

2. **Install Dependencies**: Once inside the project directory, install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Start the Development Server**: After the dependencies are installed, start the development server:

   ```bash
    npm run dev
   ```

4. **Access the App**: The development server will start, usually on port 5173. Open your web browser and navigate to http://localhost:5173. During development mode, any changes you make to the source code will automatically be reflected in the browser, thanks to Svelte’s hot module replacement.

### Building for Production

When you’re ready to build your app for production, follow these steps:

1. **Build the App**: First, build the app for production using the following command:

   ```bash
   npm run build
   ```

   This command will optimize your app for the best performance: the build is minified, and the filenames include hashes for efficient caching.

2. **Serve the App**: After the build is complete, you will be provided with a javascript file, which you can use to server the application through a proxy like nginx.

## License

This project is licensed under the MIT License. This implies that you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, given that you include the original copyright notice and the permission notice in all copies or substantial portions of the software. For more information, please see the [LICENSE](LICENSE) file in our project repository or visit the Open Source Initiative website.
