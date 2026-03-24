# React Native E-commerce Application

## Overview

This project is a mobile e-commerce application built using React Native CLI.  
It demonstrates a complete user flow including authentication, product listing with pagination, product details, and cart management.

The goal of this project is to showcase clean code structure, proper state management, and a smooth user experience.

---

## Features

### Authentication
- Phone number based login
- Mock OTP verification (OTP: 1234)
- Navigation to Home screen after successful login

### Product Listing
- Products fetched from: https://dummyjson.com/products
- Pagination using limit and skip
- Infinite scrolling
- Loading indicator while fetching data
- Basic error handling

### Product Detail
- Displays product image, title, price, and description
- Add to cart functionality

### Cart Functionality
- Add products to cart
- Remove individual items
- Increase / decrease quantity
- Clear cart option
- Total price calculation
- Empty cart state UI

---

## Tech Stack

- React Native CLI
- JavaScript (ES6+)
- React Navigation (Stack Navigator)
- Axios
- Context API

---

## Project Structure

src/
  components/
  screens/
    Auth/
    Home/
    Product/
    Cart/
  navigation/
  services/
  store/
  utils/

---

## State Management Approach

The application uses the React Context API for managing global state.

- Cart state is managed centrally
- Provides functions for adding, removing, and updating items
- Keeps business logic separate from UI

---

## API Integration

- Base URL: https://dummyjson.com
- Endpoint used: /products
- Pagination handled using:
  - limit
  - skip

---

## Setup Instructions

### Prerequisites
- Node.js installed
- React Native CLI setup
- Android Studio installed
- Physical device or emulator

### Installation

npm install

### Run the app

npx react-native run-android

---

## Key Decisions

- Used Context API for simplicity and scalability
- Separated API logic into a service layer
- Followed modular folder structure
- Focused on clean and readable code

---

## Notes

- OTP authentication is implemented using a mock value (1234)
- The project focuses on functionality and structure rather than complex UI