import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-primary font-mono">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">Get In Touch</h2>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm currently open to new opportunities and interesting projects. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:ernesthuku@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-foreground">ernesthuku@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+254710992763"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-foreground">+254 710 992 763</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping" />
                </div>
                <span className="text-foreground font-medium">Available for freelance work</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="glass rounded-xl p-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:glow-primary transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
