class AuthService {
  async signup(email: string, name: string, password: string) {
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
      });

      if (response.ok) {
        // Redirect to a success page or login page
        return await response.json();
      } else {
        // Handle signup error
        console.error("Signup failed");
        return new Error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      return new Error("Signup failed");
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect to a success page or login page
        return await response.json();
      } else {
        // Handle signup error
        console.error("Login failed");
        return new Error("Wrong email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      return new Error("Wrong email or password");
    }
  }
}

export default new AuthService();
