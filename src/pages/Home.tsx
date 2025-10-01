import { BlogSection } from '../components/BlogSection';
import { Hero } from '../layouts/hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-12">
        <Hero />
        <BlogSection />
      </main>
    </div>
  );
}
