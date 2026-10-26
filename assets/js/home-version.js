const LASTBROWSER_VERSION = "v0.1.60";

document.querySelectorAll("[data-lastbrowser-version]").forEach((element) => {
  element.textContent = `${LASTBROWSER_VERSION} Beta`;
});

document.querySelectorAll('script[type="application/ld+json"]').forEach((element) => {
  const application = JSON.parse(element.textContent);
  if (application["@type"] === "SoftwareApplication") {
    application.softwareVersion = `${LASTBROWSER_VERSION.slice(1)} Beta`;
    element.textContent = JSON.stringify(application);
  }
});
