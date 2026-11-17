import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Products } from "./Products";

export function App() {
return (
<div
className="hf bgi"
style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff"
}}
> <BrowserRouter> <NavBar />

            <Routes>
                <Route path="/" element={<h3>Home Page</h3>} />
                <Route path="/about" element={<h3>About</h3>} />

                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                <Route path="/products" element={<Products />}>
                    <Route index element={<h3>Product1</h3>} />
                    <Route path="product2" element={<h3>Product2</h3>} />
                    <Route path="product3" element={<h3>Product3</h3>} />
                </Route>

                <Route path="*" element={<h3>Page Not Found</h3>} />
            </Routes>
        </BrowserRouter>
    </div>
);

}
