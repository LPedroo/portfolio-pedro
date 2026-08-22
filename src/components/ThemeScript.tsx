export default function ThemeScript() {
  const code = `
    (function () {
      try {
        var stored = localStorage.getItem("theme");
        var theme = stored || "light";
        if (theme === "dark") document.documentElement.classList.add("dark");
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
