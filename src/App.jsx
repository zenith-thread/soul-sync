import { Route, Routes } from "react-router-dom";

// page layout
import PageLayout from "./layouts/PageLayout/PageLayout";

// pages
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
