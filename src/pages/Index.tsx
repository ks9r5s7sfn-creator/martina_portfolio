import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Camera, Film, Image as ImageIcon, Mail, MapPin } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import ContactForm from "@/components/ContactForm";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const Index = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photography",
      description: "Capturing moments with precision and artistry"
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: "Cinematography",
      description: "Cinematic storytelling through motion"
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Content Creation",
      description: "Compelling visual content for brands"
    }
  ];

  const portfolioImages = [
    {
      src: portfolio1,
      title: "Urban Architecture",
      category: "Photography"
    },
    {
      src: portfolio2,
      title: "Portrait Study",
      category: "Photography"
    },
    {
      src: portfolio3,
      title: "Mountain Landscapes",
      category: "Cinematography"
    },
    {
      src: portfolio4,
      title: "Product Photography",
      category: "Commercial"
    },
    {
      src: portfolio5,
      title: "Street Life",
      category: "Documentary"
    },
    {
      src: portfolio6,
      title: "Night Cityscape",
      category: "Cinematography"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full text-center animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Based in Berlin</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Visual
            <br />
            <span className="text-accent">Storyteller</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Content creator specializing in photography, cinematography, and filmmaking. 
            Crafting compelling visual narratives that resonate.
          </p>
          
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            What I Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-8 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
            A curated selection of my recent work in photography, cinematography, and visual storytelling
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-xs text-accent mb-1">{image.category}</p>
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">About</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I'm a content creator and filmmaker based in Berlin, passionate about 
              creating visual stories that connect with audiences. With expertise in 
              photography, cinematography, and comprehensive filmmaking, I bring 
              creative visions to life.
            </p>
            <p>
              My work spans commercial content creation, artistic photography, and 
              cinematic storytelling. I believe in the power of visual media to 
              communicate emotions, ideas, and experiences that words alone cannot capture.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Collaborate</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Fill out the form below or{" "}
              <a 
                href="mailto:hello@example.com" 
                className="text-accent hover:underline transition-all"
              >
                send me an email
              </a>
              .
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Berlin Content Creator. All rights reserved.</p>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={portfolioImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImageIndex}
        />
      )}
    </main>
  );
};

export default Index;
