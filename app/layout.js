import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import WhatsAppChatButton from "@/components/WhatsAppChatButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div>
        <body>
          <WhatsAppChatButton
            phoneNumber="7397355404"
            businessName="Hope Fit Wellness"
            message="I'm interested in your services!"
          />
          <ThemeToggle />
          <ScrollToTopButton />
          {children}
        </body>
      </div>
    </html>
  );
}
