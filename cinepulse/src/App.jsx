// import React from 'react';
// import LoginForm from './components/LoginForm';

// const App = () => {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';


import CarouselPage from './components/CarouselPage';

const App = () => {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<CarouselPage />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
};

export default App;

