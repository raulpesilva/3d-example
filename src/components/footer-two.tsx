 
 
import { Container, Section } from "@/components/craft";
import Balancer from 'react-wrap-balancer';
import Logo from '/logo.svg';

export default function Footer() {
  return (
    <footer className="not-prose border-t">
      <Section>
        <Container className="grid gap-6">
          <div className="grid gap-6">
            <a href="/">
              <h3 className="sr-only">brijr/components</h3>
              <img
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              />
            </a>
            <p>
              <Balancer>
                brijr/components is a collection of Next.js, React, Typescript components for building landing pages and
                websites.
              </Balancer>
            </p>
            <div className="mb-6 flex flex-col gap-4 text-sm text-muted-foreground underline underline-offset-4 md:mb-0 md:flex-row">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/cookie-policy">Cookie Policy</a>
            </div>
            <p className="text-muted-foreground">
              © <a href="https://github.com/brijr/components">brijr/components</a>. All rights reserved. 2024-present.
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
