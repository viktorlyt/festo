import { Routes, Route, Navigate } from "react-router-dom";
import './App.scss';
import { Home } from "./pages/Home/Home";
import { Features } from "./pages/Features/Features";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy";
import { Party } from "./pages/Party/Party";
import Success from "./pages/Success/Success";

function App() {
  const animeFunction = () => {
    const animItems = document.querySelectorAll('._anim-items');

      if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
          for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
              animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
              animItem.classList.add('_active');
            } else if (!animItem.classList.contains('_anim-no-hide')) {
              animItem.classList.remove('_active');
            }
          }
        }

        function offset(el) {
          const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }

        setTimeout(() => {
          animOnScroll();
        }, 500);
      }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home animeFunction={animeFunction} />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/features" element={<Features animeFunction={animeFunction} />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/party">
          <Route index element={(<Party />)} />
          <Route path=":id" element={(<Party />)} />
        </Route>
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
