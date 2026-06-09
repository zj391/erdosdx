import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import { useEffect } from 'react';
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { I18nextProvider } from 'react-i18next';
import i18n from './lib/i18n';
import ChatWidget from './components/ChatWidget';
import WhatsAppButton from './components/WhatsAppButton';
import { initializeGA4 } from './lib/analytics';
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Production from "./pages/Production";
import BrandStory from "./pages/BrandStory";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/brand-story" component={BrandStory} />
      <Route path="/about" component={About} />
      <Route path="/production" component={Production} />
      <Route path="/faq" component={FAQ} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  useEffect(() => {
    // Initialize Google Analytics 4
    initializeGA4();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <ChatWidget />
            <WhatsAppButton 
              phoneNumber="8615661853999"
              message="Hello! I am interested in your premium cashmere products. Could you please provide more information and a quote?"
              position="bottom-right"
            />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </I18nextProvider>
  );
}

export default App;
