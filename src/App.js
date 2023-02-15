import Login from "./pages/Login/login";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile/profile";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/cart";
import RootLayout from "./Root";
import UserProducts from "./pages/UserProducts/userProducts";
import Products from "./pages/Products/product";
import ProtectedRoute from "./protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Login /> },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/:id",
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/yourproducts",
        element: (
          <ProtectedRoute>
            <UserProducts />
          </ProtectedRoute>
        ),
      },
      { path: "/products", element: <ProtectedRoute>
        <Products />
      </ProtectedRoute> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <RouterProvider router={router}></RouterProvider>;
    </div>
  );
}

export default App;
