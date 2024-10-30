import { Route, Routes } from "react-router-dom";


import Home from "../Home";

import Guestlayout from "../layout/guestlayout";
import Matches from "../Matches";
import History from "../History";
import PlayerPage from "../PlayerPage";
import Schedule from "../Schedule";


const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Guestlayout/>}>
          <Route index element={<Home />} />
          <Route path='players' element={<PlayerPage />} />
          <Route path='matches' element={<Matches />} />
          <Route path='history' element={<History />} />
          <Route path='schedule' element={<Schedule />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
