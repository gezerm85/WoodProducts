import { Routes, Route } from "react-router-dom";
import {
  Home,
  AboutUs,
  Contact,
  Gallery,
  PricesForServices,
  NotFoundPage,
} from "../pages";

function RouterConfig() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricesForServices" element={<PricesForServices />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default RouterConfig;
