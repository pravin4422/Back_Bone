import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AgroChemicalCategories from './pages/AgroChemical';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

// Main pages
import Home from './pages/Home';
import Weather from './pages/Weather';
import Prices from './pages/Prices';
import Schemes from './pages/Schemes';
import Forum from './pages/Forum';
import AboutUs from './pages/AboutUs';

// Auth pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import CompleteProfile from './pages/CompleteProfile';
import EditProfile from './pages/EditProfile';

// Detail pages
import CreaterDetail from './pages/CreaterDetail';
import Tractor from './pages/Tractor';
import AgromedicalProducts from './pages/AgromedicalProducts';
import CultivatingField from './pages/CultivatingField';

// Agrochemical detail pages
import Insecticides from './pages/agromedical/Insecticides';
import Herbicides from './pages/Herbicides';
import BiologicalProducts from './pages/agromedical/BiologicalProducts';
import Fungicides from './pages/agromedical/Fungicides';
import Adjuvants from './pages/agromedical/Adjuvants';
import MacroNutrients from './pages/agromedical/MacroNutrients';
import MicroNutrients from './pages/agromedical/MicroNutrients';
import SoilConditioners from './pages/agromedical/SoilConditioners';
import Biostimulants from './pages/agromedical/Biostimulants';
import WaterSolubleFertilizers from './pages/agromedical/WaterSolubleFertilizers';
import SeedCoatings from './pages/agromedical/SeedCoatings';

// Farming-related pages
import FarmingDetail from './pages/FarmingDetail';
import AgroChemical from './pages/AgroChemical';
import AgroInfectors from './pages/AgroInfectors';
import OrganicFarming from './pages/OrganicFarming';
import InorganicFarming from './pages/InorganicFarming';
import FarmingStructure from './pages/FarmingStructure';
import Others from './pages/Others';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const NotFound = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-gray-600 mb-4">Page not found</p>
      <Navigate to="/" replace />
    </div>
  </div>
);

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  const initializeUser = useCallback(() => {
    try {
      const token = localStorage.getItem('token');
      const displayName = localStorage.getItem('displayName');
      const email = localStorage.getItem('userEmail');
      const phone = localStorage.getItem('phone');
      const photoURL = localStorage.getItem('photoURL');

      if (token && displayName && email) {
        setUser({
          displayName: displayName.trim(),
          email: email.trim(),
          phone: phone?.trim() || null,
          photoURL: photoURL?.trim() || null,
          isComplete: true
        });
      } else if (token) {
        setUser({
          isComplete: false,
          needsProfileCompletion: true
        });
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Error initializing user:', error);
      setAuthError('Failed to load user data');
      localStorage.clear();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    initializeUser();
  }, [initializeUser]);

  const handleAuthError = useCallback((error) => {
    console.error('Authentication error:', error);
    setAuthError(error.message || 'Authentication failed');
    setUser(null);
  }, []);

  const clearAuthError = useCallback(() => {
    setAuthError(null);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header 
            user={user} 
            setUser={setUser} 
            authError={authError}
            clearAuthError={clearAuthError}
          />

          {authError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-4 mt-4">
              <span className="block sm:inline">{authError}</span>
              <button 
                onClick={clearAuthError}
                className="float-right text-red-500 hover:text-red-700"
              >
                ×
              </button>
            </div>
          )}

          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/login" element={user ? <Navigate to="/weather" replace /> : <Login setUser={setUser} onError={handleAuthError} />} />
              <Route path="/signup" element={user ? <Navigate to="/weather" replace /> : <Signup setUser={setUser} onError={handleAuthError} />} />
              <Route path="/forgot-password" element={user ? <Navigate to="/weather" replace /> : <ForgotPassword onError={handleAuthError} />} />
              <Route path="/complete-profile" element={user?.needsProfileCompletion ? <CompleteProfile setUser={setUser} onError={handleAuthError} /> : <Navigate to={user ? "/weather" : "/login"} replace />} />

              <Route element={<PrivateRoute user={user} />}>
                <Route path="/weather" element={<Weather />} />
                <Route path="/prices" element={<Prices />} />
                <Route path="/schemes" element={<Schemes />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/edit-profile" element={<EditProfile setUser={setUser} onError={handleAuthError} />} />
                <Route path="/create" element={<CreaterDetail />} />
                <Route path="/farming-details" element={<FarmingDetail />} />
                <Route path="/agro-chemicals" element={<AgroChemical />} />
                <Route path="/agrochemical-categories" element={<AgroChemicalCategories />} />
                <Route path="/agromedical/insecticides" element={<Insecticides />} />
                <Route path="/agromedical/herbicides" element={<Herbicides />} />
                <Route path="/agromedical/biological-products" element={<BiologicalProducts />} />
                <Route path="/agromedical/fungicides" element={<Fungicides />} />
                <Route path="/agromedical/adjuvants" element={<Adjuvants />} />
                <Route path="/agromedical/macro-nutrients" element={<MacroNutrients />} />
                <Route path="/agromedical/micro-nutrients" element={<MicroNutrients />} />
                <Route path="/agromedical/soil-conditioners" element={<SoilConditioners />} />
                <Route path="/agromedical/biostimulants" element={<Biostimulants />} />
                <Route path="/agromedical/water-soluble-fertilizers" element={<WaterSolubleFertilizers />} />
                <Route path="/agromedical/seed-coatings" element={<SeedCoatings />} />
                <Route path="/agro-infectors" element={<AgroInfectors />} />
                <Route path="/organic-farming" element={<OrganicFarming />} />
                <Route path="/inorganic-farming" element={<InorganicFarming />} />
                <Route path="/farming-structure" element={<FarmingStructure />} />
                <Route path="/others" element={<Others />} />
                <Route path="/creater_detail" element={<CreaterDetail />} />
                <Route path="/Tractor" element={<Tractor />} />
                <Route path="/AgromedicalProducts" element={<AgromedicalProducts />} />
                <Route path="/CultivatingField" element={<CultivatingField />} />
                <Route path="/FarmingDetail" element={<FarmingDetail />} />
                <Route path="/AgroChemical" element={<AgroChemical />} />
                <Route path="/agro_infectors" element={<AgroInfectors />} />
                <Route path="/farming_structure" element={<FarmingStructure />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
