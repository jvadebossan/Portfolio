import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted border-t border-green-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-green-400 mb-4">
              {"<Jvad/>"}
            </div>
            <p className="text-muted-foreground mb-4">
              Full-stack developer creating exceptional digital experiences that
              drive business growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jvadebossan"
                className="text-muted-foreground hover:text-green-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jvdebossan/"
                className="text-muted-foreground hover:text-green-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              {/* <a
                href="#"
                className="text-muted-foreground hover:text-green-400 transition-colors"
              >
                <Twitter size={20} />
              </a> */}
              <a
                href="mailto:contact@jvad.online?subject=Contact%20from%20Website"
                className="text-muted-foreground hover:text-green-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="https://wa.me/5527998022214?text=Hi!%20I%20want%20to%20create%20my%20own%20Website!" className="hover:text-green-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="https://wa.me/5527998022214?text=Hi!%20I%20want%20to%20create%20my%20own%20Website!" className="hover:text-green-400 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="https://wa.me/5527998022214?text=Hi!%20I%20want%20to%20create%20my%20own%20Website!" className="hover:text-green-400 transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="https://wa.me/5527998022214?text=Hi!%20I%20want%20to%20create%20my%20own%20Website!" className="hover:text-green-400 transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="text-muted-foreground">contact@jvad.online</li>
              <li className="text-muted-foreground">+55 27 99802-2214</li>
              <li className="text-muted-foreground">Available for freelance work</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 JVAD Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
