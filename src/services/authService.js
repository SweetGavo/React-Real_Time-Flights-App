// Mock user database in localStorage
const getUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const authService = {
  // Login user
  login: async (email, password) => {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    } else {
      throw new Error('Invalid email or password');
    }
  },

  // Register user
  register: async (email, password) => {
    const users = getUsers();
    
    // Check if user already exists
    if (users.some(u => u.email === email)) {
      throw new Error('User already exists');
    }

    const newUser = {
      id: Date.now(),
      email,
      password
    };

    users.push(newUser);
    saveUsers(users);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    return newUser;
  },

  // Logout user
  logout: async () => {
    localStorage.removeItem('currentUser');
  },

  // Check if user is authenticated
  checkAuth: async () => {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }
}; 