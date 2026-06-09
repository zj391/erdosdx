import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center py-24">
          <h1 className="text-7xl md:text-8xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-md font-semibold hover:bg-[#C9A227] transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
