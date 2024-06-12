# Hubble-Order-View

## Introduction

This project is designed to create an interface for viewing e-commerce orders placed on the XiaoHongShu marketplace. The orders have been shipped by the warehouse but have not yet been received by the end customer. The interface is built using React and AntDesign, with network requests handled by Axios. The project is constructed using VITE.

You can preview the project at the following address: [https://hubble-order-view.vercel.app/](https://hubble-order-view.vercel.app/)

## Project Setup

To run this project, follow these steps:

1. **Install Dependencies**: Navigate to the root directory of the project and run:
   ```bash
   npm install
   ```
2. **Start the Development Server**: After installing the dependencies, start the development server by running:
   ```bash
   npm run dev
   ```
3. **Preview the Application**: The application can be previewed at [http://localhost:5173/](http://localhost:5173/).

## Thought Process and Choices

### Technology Stack

- **React**: Chosen for its component-based architecture, which allows for efficient UI development and state management.
- **AntDesign**: Selected for its comprehensive set of UI components, which helps in building a user-friendly and visually appealing interface.
- **Axios**: Used for making HTTP requests due to its simplicity and ease of use.
- **VITE**: Opted for its fast build times and modern development features.

### Features

1. **Order Status**: Displays the status of the order using `fulfillmentEvents` and `fulfillmentStatus`.
2. **Marketplace Information**: Shows the marketplace details using `Channel`.
3. **Shipping Information**: Provides shipping details using `shippingUnits`.
4. **Order Lines**: Lists the items in the order using `salesOrderLineItems`.
5. **Order Details**: Displays comprehensive details about the order.

### Interactions

- **Edit Order**: Allows users to edit the order and POST changes to `/api/sales-order/{id}`.
- **Cancel Order**: Enables users to cancel the order by POSTing to `/api/sales-order/{id}/cancel`.
- **Create Return**: Facilitates the creation of a return by POSTing to `/api/sales-order/{id}/create-return`.

### Bonus Feature

- **Comment Area**: Adds a section for users to comment on the order and collaborate. For example:
  - UserA: Can we change the carrier to SF?
  - UserB: @UserA: SF can't cover this destination

### API Simulation

- **GET Request**: Simulates fetching the JSON payload using Axios.
- **POST Requests**: Ensures correct API calls for editing, canceling, and creating returns without making actual requests.

## Conclusion

This project aims to provide a clear and user-friendly interface for viewing and interacting with e-commerce orders. The choice of technologies and the structured approach ensure a robust and maintainable application.
