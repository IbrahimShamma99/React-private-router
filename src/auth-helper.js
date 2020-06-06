const auth = {
  isAuthenticated() {
    if (typeof window === "undefined") return false;

    if (localStorage.getItem("jwt")) return localStorage.getItem("jwt");
    else return false;
  },
};

export default auth;
