import { ref, onMounted, onUnmounted } from "vue";

export function useThemeContext() {
  const isDark = ref(false);

  // Creating a media query selector
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const updateDOM = () => {
    if (isDark.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    updateDOM();

    localStorage.setItem("theme", isDark.value ? "dark" : "light");
  };

  const handleSystemChange = (event: MediaQueryListEvent) => {
    // Only update if the user hasn't set a manual preference in this session
    if (!localStorage.getItem("theme")) {
      isDark.value = event.matches;
      updateDOM();
    }
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      // Use the manual preference if it exists
      isDark.value = savedTheme === "dark";
    } else {
      // Use system preference if no manual choice is saved
      isDark.value = mediaQuery.matches;
    }

    updateDOM();

    //listening to system for changes
    mediaQuery.addEventListener("change", handleSystemChange);
  });

  onUnmounted(() => {
    //stops listening
    mediaQuery.removeEventListener("change", handleSystemChange);
  });

  return { isDark, toggleTheme };
}
