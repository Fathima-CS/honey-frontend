// src/services/authService.js

const authService = {
  login: (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error('Invalid credentials');
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  },

  register: (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find((u) => u.email === data.email)) {
      throw new Error('User already exists');
    }

    const newUser = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      password: data.password,
      role:
        data.email === 'admin@honeyhub.com'
          ? 'admin'
          : data.email === 'seller@honeyhub.com'
          ? 'seller'
          : 'user',
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return newUser;
  },

  getCurrentUser: () =>
    JSON.parse(localStorage.getItem('currentUser')),

  logout: () => {
    localStorage.removeItem('currentUser');
  },
};

export default authService; // ✅ DEFAULT EXPORT ONLY
