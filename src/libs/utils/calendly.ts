declare global {
  interface Window {
    Calendly?: any;
  }
}

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL;

export const openCalendlyPopup = () => {
  if (!CALENDLY_URL) {
    alert("VITE_CALENDLY_URL is missing");
    return;
  }

  if (!window.Calendly) {
    alert("Calendly is still loading, try again");
    return;
  }

  window.Calendly.initPopupWidget({
    url: CALENDLY_URL,
  });
};
