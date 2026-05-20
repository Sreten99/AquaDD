import React, { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';
import './InstallPrompt.css';

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Show our custom install prompt
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  //Kada korisnik klikne na "Instaliraj aplikaciju"
  const handleInstallClick = async () => {
    //Pokretanje instalacije aplikacije
    if (!deferredPrompt) {
      return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    //Cekaj korisnikov odgovor
    const { outcome } = await deferredPrompt.userChoice;

    console.log(`User response to the install prompt: ${outcome}`);

    // Clear the deferredPrompt for next time
    // Sačuvaj event
    setDeferredPrompt(null);
    //Prikazi dugme/popup
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Remember dismissal for 7 days
    localStorage.setItem('installPromptDismissed', Date.now());
  };

  // Check if user dismissed recently
  useEffect(() => {
    const dismissed = localStorage.getItem('installPromptDismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      if (Date.now() - dismissedTime < sevenDays) {
        setShowPrompt(false);
      }
    }
  }, []);

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="install-prompt-overlay">
      <div className="install-prompt">
        <button className="install-prompt-close" onClick={handleDismiss}>
          <X size={20} />
        </button>
        <div className="install-prompt-icon">
          <Download size={40} />
        </div>
        <h3>Instaliraj AquaDD aplikaciju</h3>
        <p>
          Dodaj AquaDD na svoj početni ekran za brži pristup i offline korišćenje!
        </p>
        <button className="install-prompt-button" onClick={handleInstallClick}>
          <Download size={20} />
          Instaliraj aplikaciju
        </button>
        <button className="install-prompt-later" onClick={handleDismiss}>
          Možda kasnije
        </button>
      </div>
    </div>
  );
}

export default InstallPrompt;